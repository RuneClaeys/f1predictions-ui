import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const RaceResults = ({ grandPrix, open }) => {
    const { t } = useTranslation();
    const racePredictions = useMemo(
        () =>
            grandPrix?.user_prediction?.prediction_entries
                ?.filter((prediction) => prediction.name.startsWith('RACE'))
                ?.sort((a, b) => a.name.localeCompare(b.name)),
        [grandPrix],
    );

    const raceResults = useMemo(
        () =>
            grandPrix?.result?.result_entries
                ?.filter((result) => result.name.startsWith('RACE'))
                ?.sort((a, b) => a.name.localeCompare(b.name)),
        [grandPrix],
    );
    return (
        <div className="card" style={{ maxWidth: `calc(100vw - 1.5rem)`, overflow: 'auto' }}>
            <details className="card-body p-2" open={open}>
                <summary>{t('result.race-result')}</summary>
                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th className="px-2">{t('result.prediction')}</th>
                            <th className="text-nowrap px-2">{t('result.result')}</th>
                            <th className="text-nowrap px-2 text-center">{t('global.points')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(10)].map((_, i) => (
                            <tr key={i}>
                                <td className="p-2 text-nowrap">
                                    {racePredictions?.length > 0 ? (
                                        <>
                                            <strong>{i + 1}. </strong>
                                            <span>
                                                {racePredictions[i]?.driver?.first_name.charAt(0)}. {racePredictions[i]?.driver?.last_name}
                                            </span>
                                        </>
                                    ) : (
                                        <span>-</span>
                                    )}
                                </td>
                                <td className="p-2 text-nowrap">
                                    {raceResults?.length > 0 ? (
                                        <span>
                                            {raceResults[i]?.driver?.first_name.charAt(0)}. {raceResults[i]?.driver?.last_name}
                                        </span>
                                    ) : (
                                        <span>-</span>
                                    )}
                                </td>
                                <td className="p-2 text-center">{racePredictions?.[i]?.points || '-'}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className="p-2">
                                <strong>{t('global.total')}</strong>
                            </td>
                            <td className="p-2 text-center"></td>
                            <td className="p-2 text-center">
                                <strong>{grandPrix?.user_prediction?.race_points}</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </details>
        </div>
    );
};

export default RaceResults;
