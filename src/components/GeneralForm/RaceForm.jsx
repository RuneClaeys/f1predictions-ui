import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../core/hooks/useStore';

const RaceForm = ({ handleChange, errors, values, disabled, grandPrix }) => {
    const { drivers } = useStore().state;
    const { t } = useTranslation();
    return (
        <div className="d-flex flex-column" style={{ paddingBottom: '80px' }}>
            <h2 className="mb-1">{t('global.race')}</h2>
            <h6 className="mb-3">{grandPrix?.name}</h6>

            {[...Array(10)].map((_, i) => {
                const count = i + 1;
                return (
                    <Form.Group key={`RACE_${count}`} className="mb-3">
                        <Form.Label>
                            {t('global.position')} {count}
                        </Form.Label>
                        <Form.Control
                            as="select"
                            name={`RACE_${count}`}
                            value={values[`RACE_${count}`]}
                            disabled={disabled}
                            onChange={handleChange}
                            isInvalid={!!errors[`RACE_${count}`]}
                        >
                            <option>{t('global.choose-driver')}</option>
                            {drivers.map((driver) => {
                                return (
                                    <option key={driver.id} value={driver.id}>
                                        {`${driver.first_name} ${driver.last_name}`}
                                    </option>
                                );
                            })}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">{errors[`RACE_${count}`]}</Form.Control.Feedback>
                    </Form.Group>
                );
            })}
        </div>
    );
};

export default RaceForm;
