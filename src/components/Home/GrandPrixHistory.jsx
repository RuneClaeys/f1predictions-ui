import { format } from 'date-fns';
import { useMemo } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const LoadingList = () => {
    return (
        <ListGroup as="ol">
            {[...Array(5)].map((_, i) => (
                <ListGroup.Item key={i} as="li" className="d-flex justify-content-between align-items-start">
                    <Row className="w-100">
                        <Placeholder className="d-flex align-items-center justify-content-center" xs={2} as={Col} animation="glow">
                            <Placeholder className="rounded-1" xs={12} />
                        </Placeholder>
                        <Placeholder xs={9} as={Col} animation="glow">
                            <Placeholder className="rounded-1" xs={8} />
                            <Placeholder className="rounded-1" xs={10} />
                        </Placeholder>
                        <Placeholder as={Col} animation="glow" xs={1} className="d-flex align-items-center">
                            <Placeholder className="rounded-1" xs={12} style={{ width: '20px' }} />
                        </Placeholder>
                    </Row>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

const List = ({ grandPrix, upcomming = false }) => {
    return (
        <ListGroup as="ol">
            {grandPrix.map((gp) => {
                return (
                    <ListGroup.Item key={gp.id} as="li" className="d-flex justify-content-between align-items-start p-0">
                        <NavLink
                            to={!upcomming ? '/result/' + gp.id : gp.diff <= 1 ? `/prediction/` + gp.id : ''}
                            className="d-flex align-items-center w-100 text-decoration-none text-black px-2"
                        >
                            <strong className="text-nowrap p-2">{gp.event}</strong>

                            <div className="d-flex flex-column p-2 flex-grow-1">
                                <h6>{gp.name}</h6>
                                <small className="m-0">{format(gp.qualifying_start_timestamp, 'dd/MM/yyyy HH:mm:ss')}</small>
                            </div>
                            <p className="p-2 m-0">{gp?.user_prediction?.total_points || '-'}</p>
                        </NavLink>
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
    );
};

const GrandPrixHistory = ({ overview, loading }) => {
    const { t } = useTranslation();
    const historyGPs = useMemo(() => {
        return overview.grand_prix
            .filter((gp) => gp.qualifying_start_timestamp < new Date())
            .sort((a, b) => a.qualifying_start_timestamp - b.qualifying_start_timestamp);
    }, [overview]);

    const upcommingGPs = useMemo(() => {
        return overview.grand_prix
            .filter((gp) => gp.qualifying_start_timestamp > new Date())
            .sort((a, b) => a.qualifying_start_timestamp - b.qualifying_start_timestamp);
    }, [overview]);

    return (
        <div>
            {loading ? (
                <>
                    <h5 className="mb-3">{t('home.upcomming')}</h5>
                    <LoadingList />
                    <h5 className="my-3">{t('home.history')}</h5>
                    <LoadingList />
                </>
            ) : (
                <>
                    {upcommingGPs.length > 0 && <h5 className="mb-3">{t('home.upcomming')}</h5>}
                    <List grandPrix={upcommingGPs || []} upcomming />
                    {historyGPs.length > 0 && <h5 className="my-3">{t('home.history')}</h5>}
                    <List grandPrix={historyGPs || []} />{' '}
                </>
            )}
        </div>
    );
};

export default GrandPrixHistory;
