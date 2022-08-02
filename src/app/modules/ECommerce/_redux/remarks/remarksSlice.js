import {createSlice} from "@reduxjs/toolkit";

const initialRemarksState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  remarkForEdit: undefined,
  lastError: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const remarksSlice = createSlice({
  name: "remarks",
  initialState: initialRemarksState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    // getRemarkById
    remarkFetched: (state, action) => {
      state.actionsLoading = false;
      state.remarkForEdit = action.payload.remarkForEdit;
      state.error = null;
    },
    // findRemarks
    remarksFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // createRemark
    remarkCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.remark);
    },
    // updateRemark
    remarkUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.remark.id) {
          return action.payload.remark;
        }
        return entity;
      });
    },
    // deleteRemark
    remarkDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.id);
    },
    // deleteRemarks
    remarksDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        el => !action.payload.ids.includes(el.id)
      );
    },
    // remarksUpdateState
    remarksStatusUpdated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      const { ids, status } = action.payload;
      state.entities = state.entities.map(entity => {
        if (ids.findIndex(id => id === entity.id) > -1) {
          entity.status = status;
        }
        return entity;
      });
    }
  }
});
