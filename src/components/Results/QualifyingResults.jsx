import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const QualifyingResults = ({ grandPrix, open }) => {
    const { t } = useTranslation();

    const qualifyingPredictions = useMemo(
        () =>
            grandPrix?.user_prediction?.prediction_entries
                ?.filter((prediction) => prediction.name.startsWith('QUALIFYING'))
                ?.sort((a, b) => a.name.localeCompare(b.name)),
        [grandPrix],
    );

    const qualifyingResults = useMemo(
        () =>
            grandPrix?.result?.result_entries
                ?.filter((result) => result.name.startsWith('QUALIFYING'))
                ?.sort((a, b) => a.name.localeCompare(b.name)),
        [grandPrix],
    );
    return (
        <div className="card" style={{ maxWidth: `calc(100vw - 1.5rem)`, overflow: 'auto' }}>
            <details className="card-body p-2" open={open}>
                <summary>{t('result.qualifying-result')}</summary>
                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th className=" px-2">{t('result.prediction')}</th>
                            <th className="text-nowrap w-100 px-2">{t('result.result')}</th>
                            <th className="text-nowrap px-2 text-center">{t('global.points')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(5)].map((_, i) => (
                            <tr key={i}>
                                <td className="p-2 text-nowrap">
                                    {qualifyingPredictions?.length > 0 ? (
                                        <>
                                            <strong>{i + 1}. </strong>
                                            <span>
                                                {qualifyingPredictions[i]?.driver?.first_name.charAt(0)}{' '}
                                                {qualifyingPredictions[i]?.driver?.last_name}
                                            </span>
                                        </>
                                    ) : (
                                        <span>-</span>
                                    )}
                                </td>
                                <td className="p-2 text-nowrap">
                                    {qualifyingResults?.length > 0 ? (
                                        <span>
                                            {qualifyingResults[i]?.driver?.first_name.charAt(0)}. {qualifyingResults[i]?.driver?.last_name}
                                        </span>
                                    ) : (
                                        <span>-</span>
                                    )}
                                </td>
                                <td className="p-2 text-center">{qualifyingPredictions?.[i]?.points || '-'}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className="p-2">
                                <strong>{t('global.total')}</strong>
                            </td>
                            <td colSpan={1} className="p-2 text-center"></td>
                            <td className="p-2 text-center">
                                <strong>{grandPrix?.user_prediction?.qualifying_points}</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </details>
        </div>
    );
};

export default QualifyingResults;
