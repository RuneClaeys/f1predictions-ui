import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Settings = () => {
    const { push } = useHistory();
    const { t, i18n } = useTranslation();

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

    return (
        <div className="form-container">
            <Stack gap={3}>
                <div>
                    <h4>{t('settings.application')}</h4>
                    <div className="row">
                        <Form.Group className="col-12" style={{ maxWidth: '400px' }}>
                            <Form.Label>{t('settings.language')}</Form.Label>
                            <Form.Control as="select" name={`locale`} value={i18n.language} onChange={(e) => changeLocale(e.target.value)}>
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
