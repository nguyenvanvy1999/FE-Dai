import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../index'

const selectAuth = (state: RootState) => state.auth

const selectAuthUser = createSelector(selectAuth, (auth) => auth.user)

const selectIsLogging = createSelector(selectAuth, (auth) => auth.isLogging)

const selectIsLoading = createSelector(selectAuth, (auth) => auth.isLoading)

const selectIsLoadingRegister = createSelector(selectAuth, (auth) => auth.isLoadingRegister)

const selectIsLoadingLogout = createSelector(selectAuth, (auth) => auth.isLoadingLogout)

const authSelector = {
  selectAuthUser,
  selectIsLogging,
  selectIsLoading,
  selectIsLoadingRegister,
  selectIsLoadingLogout,
}

export default authSelector
