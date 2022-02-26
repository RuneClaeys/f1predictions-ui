import * as yup from 'yup';
import i18n from '../i18n/i18n';

function isUnique(value, { parent }, type) {
    if (!value) {
        return true;
    }

    const isDuplicate =
        Object.entries(parent)
            .filter(([key]) => key.startsWith(type))
            .filter(([_, v]) => v == value).length > 1;
    return !isDuplicate;
}

function isNotInRace(value, { parent }) {
    if (!value) return true;

    const isInRace = !!Object.entries(parent)
        .filter(([key]) => key.startsWith('RACE'))
        .find(([_, v]) => v == value);

    return !isInRace;
}

export default [
    yup.object().shape({
        QUALIFYING_1: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'QUALIFYING')),
        QUALIFYING_2: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'QUALIFYING')),
        QUALIFYING_3: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'QUALIFYING')),
        QUALIFYING_4: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'QUALIFYING')),
        QUALIFYING_5: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'QUALIFYING')),
    }),
    yup.object().shape({
        RACE_1: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'RACE')),
        RACE_2: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'RACE')),
        RACE_3: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'RACE')),
        RACE_4: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'RACE')),
        RACE_5: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'RACE')),
        RACE_6: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'RACE')),
        RACE_7: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'RACE')),
        RACE_8: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'RACE')),
        RACE_9: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'RACE')),
        RACE_10: yup
            .string()
            .required(i18n.t('global.required'))
            .test('Unique', i18n.t('global.dirver-already-selected'), (value, options) => isUnique(value, options, 'RACE')),
    }),
    yup.object().shape({
        FIRST_DNF: yup
            .string()
            .required(i18n.t('global.required'))
            .test('isInRace', i18n.t('global.dirver-set-to-finish-race'), isNotInRace),
        FASTEST_LAP: yup.string().required(i18n.t('global.required')),
    }),
];
