import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStore } from '../core/hooks/useStore';

const Settings = () => {
    const { push } = useHistory();
    const { t, i18n } = useTranslation();
    const { dispatch, state } = useStore();

    const { driver_sorting } = state;

    const logout = useCallback(() => {
        caches
            .keys()
            .then(function (names) {
                for (let name of names) {
                    if (name.startsWith('workbox-runtime')) {
                        caches.delete(name);
                    }
                }
            })
            .finally(() => {
                dispatch({ type: 'SET_ACCESS_TOKEN', payload: null });
                localStorage.removeItem('access_token');
                push('/signin');
            });
    }, []);

    const changeLocale = useCallback(
        (locale) => {
            i18n.changeLanguage(locale);
            window.location.reload();
        },
        [i18n],
    );

    const changeDriverSorting = useCallback((value) => {
        localStorage.setItem('driver_sorting', value);
        dispatch({ type: 'SET_DRIVER_SORTING', payload: value });
    });

    return (
        <div className="form-container">
            <Stack gap={3}>
                <div>
                    <h4>{t('settings.application')}</h4>
                    <div className="row mb-3">
                        <Form.Group className="col-12" style={{ maxWidth: '400px' }}>
                            <Form.Label>{t('settings.language')}</Form.Label>
                            <Form.Control
                                as="select"
                                name={`locale`}
                                value={i18n.language.substring(0, 2)}
                                onChange={(e) => changeLocale(e.target.value)}
                            >
                                {[
                                    { id: 'nl', language: 'Nederlands' },
                                    { id: 'en', language: 'English' },
                                ].map((locale) => {
                                    return (
                                        <option key={locale.id} value={locale.id}>
                                            {locale.language}
                                        </option>
                                    );
                                })}
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <div className="row">
                        <Form.Group className="col-12" style={{ maxWidth: '400px' }}>
                            <Form.Label>{t('settings.driver-sorting')}</Form.Label>
                            <Form.Control
                                as="select"
                                name="driver_sorting"
                                value={driver_sorting}
                                onChange={(e) => changeDriverSorting(e.target.value)}
                            >
                                {[
                                    { id: 'first_name', language: 'Voornaam' },
                                    { id: 'last_name', language: 'Achternaam' },
                                    { id: 'team_name', language: 'Team' },
                                ].map((locale) => {
                                    return (
                                        <option key={locale.id} value={locale.id}>
                                            {locale.language}
                                        </option>
                                    );
                                })}
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>
                <div>
                    <h4>{t('settings.account')}</h4>
                    <Button className="col-6" onClick={logout}>
                        {t('settings.log-out')}
                    </Button>
                </div>
            </Stack>
        </div>
    );
};

export default Settings;
