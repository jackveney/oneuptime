import BackendAPI from 'Common-ui/src/utils/api/backend';
import { Dispatch } from 'redux';
import * as types from '../constants/report';
import ErrorPayload from 'Common-ui/src/payload-types/error';
import PositiveNumber from 'Common/Types/PositiveNumber';
// Incident Reports Section

export const getActiveMembersRequest = (promise: $TSFixMe) => {
    return {
        type: types.GET_ACTIVE_MEMBERS_REQUEST,
        payload: promise,
    };
};

export const getActiveMembersSuccess = (members: $TSFixMe) => {
    return {
        type: types.GET_ACTIVE_MEMBERS_SUCCESS,
        payload: members,
    };
};

export const getActiveMembersError = (error: ErrorPayload) => {
    return {
        type: types.GET_ACTIVE_MEMBERS_FAILED,
        payload: error,
    };
};

export const getActiveMembers =
    (
        projectId: string,
        startDate: $TSFixMe,
        endDate: $TSFixMe,
        skip: PositiveNumber,
        limit: PositiveNumber
    ) =>
    async (dispatch: Dispatch) => {
        try {
            const promise = BackendAPI.get(
                `reports/${projectId}/active-members?startDate=${startDate}&endDate=${endDate}&skip=${skip}&limit=${limit}`
            );
            dispatch(getActiveMembersRequest(promise));
            const members = await promise;

            dispatch(getActiveMembersSuccess(members.data));
        } catch (error) {
            let newerror = error;
            if (newerror && newerror.response && newerror.response.data)
                newerror = newerror.response.data;
            if (newerror && newerror.data) {
                newerror = newerror.data;
            }
            if (newerror && newerror.message) {
                newerror = newerror.message;
            } else {
                newerror = 'Network Error';
            }
            dispatch(getActiveMembersError(newerror));
        }
    };

export const getActiveMonitorsRequest = (promise: $TSFixMe) => {
    return {
        type: types.GET_ACTIVE_MONITORS_REQUEST,
        payload: promise,
    };
};

export const getActiveMonitorsSuccess = (monitors: $TSFixMe) => {
    return {
        type: types.GET_ACTIVE_MONITORS_SUCCESS,
        payload: monitors,
    };
};

export const getActiveMonitorsError = (error: ErrorPayload) => {
    return {
        type: types.GET_ACTIVE_MONITORS_FAILED,
        payload: error,
    };
};

export const getActiveMonitors =
    (
        projectId: string,
        startDate: $TSFixMe,
        endDate: $TSFixMe,
        skip: PositiveNumber,
        limit: PositiveNumber
    ) =>
    async (dispatch: Dispatch) => {
        try {
            const promise = BackendAPI.get(
                `reports/${projectId}/active-monitors?startDate=${startDate}&endDate=${endDate}&skip=${
                    skip || 0
                }&limit=${limit || 0}`
            );
            dispatch(getActiveMonitorsRequest(promise));
            const monitors = await promise;

            dispatch(getActiveMonitorsSuccess(monitors.data));
        } catch (error) {
            let newerror = error;
            if (newerror && newerror.response && newerror.response.data)
                newerror = newerror.response.data;
            if (newerror && newerror.data) {
                newerror = newerror.data;
            }
            if (newerror && newerror.message) {
                newerror = newerror.message;
            } else {
                newerror = 'Network Error';
            }
            dispatch(getActiveMonitorsError(newerror));
        }
    };

export const getIncidentsRequest = (promise: $TSFixMe) => {
    return {
        type: types.GET_INCIDENTS_REQUEST,
        payload: promise,
    };
};

export const getIncidentsSuccess = (reports: $TSFixMe) => {
    return {
        type: types.GET_INCIDENTS_SUCCESS,
        payload: reports,
    };
};

export const getIncidentsError = (error: ErrorPayload) => {
    return {
        type: types.GET_INCIDENTS_FAILED,
        payload: error,
    };
};

export const getIncidents =
    (
        projectId: string,
        filter: $TSFixMe,
        startDate: $TSFixMe,
        endDate: $TSFixMe
    ) =>
    async (dispatch: Dispatch) => {
        try {
            const promise = BackendAPI.get(
                `reports/${projectId}/incidents?startDate=${startDate}&endDate=${endDate}&filter=${filter}`
            );
            dispatch(getIncidentsRequest(promise));
            const reports = await promise;

            dispatch(getIncidentsSuccess(reports.data));
        } catch (error) {
            let newerror = error;
            if (newerror && newerror.response && newerror.response.data)
                newerror = newerror.response.data;
            if (newerror && newerror.data) {
                newerror = newerror.data;
            }
            if (newerror && newerror.message) {
                newerror = newerror.message;
            } else {
                newerror = 'Network Error';
            }
            dispatch(getIncidentsError(newerror));
        }
    };

export const getResolveTimeRequest = (promise: $TSFixMe) => {
    return {
        type: types.GET_RESOLVE_TIME_REQUEST,
        payload: promise,
    };
};

export const getResolveTimeSuccess = (reports: $TSFixMe) => {
    return {
        type: types.GET_RESOLVE_TIME_SUCCESS,
        payload: reports,
    };
};

export const getResolveTimeError = (error: ErrorPayload) => {
    return {
        type: types.GET_RESOLVE_TIME_FAILED,
        payload: error,
    };
};

export const getResolveTime =
    (
        projectId: string,
        filter: $TSFixMe,
        startDate: $TSFixMe,
        endDate: $TSFixMe
    ) =>
    async (dispatch: Dispatch) => {
        try {
            const promise = BackendAPI.get(
                `reports/${projectId}/average-resolved?startDate=${startDate}&endDate=${endDate}&filter=${filter}`
            );
            dispatch(getResolveTimeRequest(promise));
            const reports = await promise;

            dispatch(getResolveTimeSuccess(reports.data));
        } catch (error) {
            let newerror = error;
            if (newerror && newerror.response && newerror.response.data)
                newerror = newerror.response.data;
            if (newerror && newerror.data) {
                newerror = newerror.data;
            }
            if (newerror && newerror.message) {
                newerror = newerror.message;
            } else {
                newerror = 'Network Error';
            }
            dispatch(getResolveTimeError(newerror));
        }
    };
