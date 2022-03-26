import React, { useMemo } from 'react';
import { useEffect } from 'react';

const initialNavBar = {
    title: 'F1 Predictions',
    leftAction: null,
    leftActioinIcon: null,
    rightAction: null,
    rightActionIcon: null,
    showBottomNav: true,
};

const initialState = {
    drivers: [],
    driver_sorting: 'first_name',
    grandPrix: [],
    seasons: [],
    current_season: null,
    notifications: [],
    navbar: initialNavBar,
    accessToken: null,
    user: null,
};

const StoreContext = React.createContext();

function storeReducer(state, action) {
    switch (action.type) {
        case 'SET_DRIVERS':
            return { ...state, drivers: action.payload };
        case 'SET_DRIVER_SORTING':
            return { ...state, driver_sorting: action.payload };
        case 'SET_GRAND_PRIX':
            return { ...state, grandPrix: action.payload };
        case 'SET_SEASONS':
            return { ...state, seasons: action.payload };
        case 'SET_CURRENT_SEASON':
            return { ...state, current_season: action.payload };
        case 'SET_NAVBAR':
            return { ...state, navbar: { ...state.navbar, ...action.payload } };
        case 'RESET_NAVBAR':
            return { ...state, navbar: initialNavBar };
        case 'NOTIFY':
            return { ...state, notifications: [...state.notifications, action.payload] };
        case 'REMOVE_NOTIFICATION':
            return { ...state, notifications: state.notifications.filter((n) => n.id != action.payload) };
        case 'SET_ACCESS_TOKEN':
            return { ...state, accessToken: action.payload };
        case 'SET_USER':
            return { ...state, user: action.payload };
        default:
            return state;
    }
}

const StoreProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(storeReducer, initialState);

    const { drivers, driver_sorting } = state;

    useEffect(() => {
        const driverSorting = localStorage.getItem('driver_sorting');
        dispatch({ type: 'SET_DRIVER_SORTING', payload: driverSorting || 'first_name' });

        const accessToken = localStorage.getItem('access_token');
        if (accessToken) dispatch({ type: 'SET_ACCESS_TOKEN', payload: accessToken });
    }, []);

    const mappedDrivers = useMemo(
        () =>
            drivers
                .map((d) => ({
                    ...d,
                    team_name: d.team.name,
                    display_key:
                        driver_sorting === 'team_name'
                            ? `[${d.team.short_name}] - ${d.first_name} ${d.last_name}`
                            : driver_sorting === 'first_name'
                            ? `${d.first_name} ${d.last_name} - [${d.team.short_name}]`
                            : `${d.last_name} ${d.first_name} - [${d.team.short_name}]`,
                }))
                .sort((a, b) => a?.[driver_sorting]?.localeCompare(b?.[driver_sorting])),
        [drivers, driver_sorting],
    );

    return <StoreContext.Provider value={{ state: { ...state, drivers: mappedDrivers }, dispatch }}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
