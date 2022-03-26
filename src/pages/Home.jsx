import React, { useMemo } from 'react';
import { differenceInDays, subHours } from 'date-fns';

import { useGet } from '../core/hooks/useGet';
import { API_RESULTS } from '../core/endpoints/endpoints';
import { useTranslation } from 'react-i18next';

const TotalPoints = React.lazy(() => import('../components/TotalPoints'));
const ShowcaseGP = React.lazy(() => import('../components/Home/ShowcaseGP'));
const GrandPrixHistory = React.lazy(() => import('../components/Home/GrandPrixHistory'));

const Home = () => {
    const { t } = useTranslation();

    const { data: overview, loading } = useGet(API_RESULTS, { initialValue: { grand_prix: [] } });

    const OVERVIEW = useMemo(
        () => ({
            ...overview,
            grand_prix: overview.grand_prix
                .map((gp) => {
                    return {
                        ...gp,
                        qualifying_start_timestamp: new Date(gp.qualifying_start_timestamp),
                        race_start_timestamp: new Date(gp.race_start_timestamp),
                        diff: differenceInDays(new Date(gp.qualifying_start_timestamp), new Date()),
                    };
                })
                .sort((a, b) => a.qualifying_start_timestamp - b.qualifying_start_timestamp),
        }),
        [overview],
    );

    const activeGP = useMemo(() => {
        return OVERVIEW.grand_prix.find(
            (gp) => new Date() < gp.race_start_timestamp && new Date() > subHours(gp.qualifying_start_timestamp, 1),
        );
    }, [OVERVIEW]);

    const upCommingGP = useMemo(() => {
        return OVERVIEW.grand_prix.find((gp) => gp.qualifying_start_timestamp > new Date());
    }, [OVERVIEW]);

    const prevGP = useMemo(() => {
        return OVERVIEW.grand_prix.filter((gp) => gp.race_start_timestamp < new Date());
    }, [OVERVIEW]);

    const nextGP = useMemo(() => {
        return OVERVIEW.grand_prix.filter((gp) => gp?.id !== activeGP?.id).filter((gp) => gp.race_start_timestamp > new Date());
    }, [OVERVIEW, activeGP]);

    const showcaseGP = useMemo(() => {
        if (activeGP) return activeGP;
        if (upCommingGP?.diff < 3) return upCommingGP;
        return prevGP?.[0];
    }, [prevGP, activeGP, upCommingGP]);

    return (
        <div gap={4} className="home">
            <div className="home__showcase">
                <ShowcaseGP
                    showcaseGP={showcaseGP}
                    isActive={activeGP?.id === showcaseGP?.id}
                    isUpcomming={upCommingGP?.id === showcaseGP?.id}
                    loading={loading || !overview}
                />
            </div>
            <div className="home__total">
                <h5 className="mb-3">{t('home.season-total')}</h5>
                <TotalPoints results={overview} loading={loading || !overview} bg="secondary" />
            </div>
            <div className="home__history">
                <GrandPrixHistory prevGP={prevGP} nextGP={nextGP} loading={loading || !overview} />
            </div>
        </div>
    );
};

export default Home;
