import { createSlice } from '@reduxjs/toolkit';
import {
  addNotice,
  fetchNotices,
  getAllOwnNotices,
  deleteNotice,
  getNoticeById,
  removeFromFavorite,
  addToFavorite,
  fetchFavoriteNotices,
  getNoticesByCategory,
  getNoticesBySearch,
  getFavNoticesbyCategory,
} from './noticesOperations';
const noticesInitialState = {
  notices: [],
  totalNotices: '',
  noticesFavorite: [],
  // setFav: false,
  noticeAdd: {},
  isLoading: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices = payload.listAllNotices;
        state.totalNotices = payload.total;
      })
      .addCase(fetchNotices.pending, handlePending)
      .addCase(fetchNotices.rejected, handleRejected)
      .addCase(addNotice.fulfilled, (state, { payload }) => {
        state.notices.unshift(payload);
        state.isLoadingNotices = false;
        state.errorNotices = null;
        state.noticeAdd = payload;
      })
      .addCase(addNotice.pending, handlePending)
      .addCase(addNotice.rejected, handleRejected)
      .addCase(deleteNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices = state.notices.filter(
          notice => notice._id !== payload.item._id
        );
      })
      .addCase(deleteNotice.pending, handlePending)
      .addCase(deleteNotice.rejected, handleRejected)
      .addCase(getAllOwnNotices.pending, handlePending)
      .addCase(getAllOwnNotices.fulfilled, (state, { payload }) => {
        state.isLoadingNotices = false;
        state.errorNotices = null;
        state.notices = payload.noticesList;
        state.totalNotices = payload.total;
      })
      .addCase(getAllOwnNotices.rejected, handleRejected)
      .addCase(getNoticeById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices.find(notice => notice.id === payload.id);
      })
      .addCase(getNoticeById.pending, handlePending)
      .addCase(getNoticeById.rejected, handleRejected)
      .addCase(removeFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        // state.noticesFavorite = payload.result;
        state.noticesFavorite = state.noticesFavorite.filter(
          notice => notice._id !== payload._id
        );
      })
      .addCase(removeFromFavorite.pending, handlePending)
      .addCase(removeFromFavorite.rejected, handleRejected)

      .addCase(addToFavorite.pending, handlePending)
      .addCase(addToFavorite.rejected, handleRejected)
      .addCase(addToFavorite.fulfilled, (state, { payload }) => {
        state.noticesFavorite.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchFavoriteNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.noticesFavorite = payload.favNoticesPag;
        // state.notices = payload.usersFavNotices;
        // state.totalNotices = payload.total;
      })
      .addCase(fetchFavoriteNotices.pending, handlePending)
      .addCase(fetchFavoriteNotices.rejected, handleRejected)
      .addCase(getNoticesByCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices = payload.noticesList;
        state.totalNotices = payload.total;
      })
      .addCase(getNoticesByCategory.pending, handlePending)
      .addCase(getNoticesByCategory.rejected, handleRejected)
      .addCase(getNoticesBySearch.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices = payload.noticesList;
        state.totalNotices = payload.total;
      })
      .addCase(getNoticesBySearch.pending, handlePending)
      .addCase(getNoticesBySearch.rejected, handleRejected)
      .addCase(getFavNoticesbyCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices = payload.favNoticesPag;
        state.totalNotices = payload.total;
        // state.setFav = true;
      })
      .addCase(getFavNoticesbyCategory.pending, handlePending)
      .addCase(getFavNoticesbyCategory.rejected, handleRejected);
  },
});

export const noticesReducer = noticesSlice.reducer;
