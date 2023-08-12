import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../index'

const selectAuth = (state: RootState) => state.auth

const selectAuthUser = createSelector(selectAuth, (auth) => auth.user)

const selectIsLoading = createSelector(selectAuth, (auth) => auth.isLoading)

const selectIsLoadingRegister = createSelector(selectAuth, (auth) => auth.isLoadingRegister)

const selectIsLoadingLogout = createSelector(selectAuth, (auth) => auth.isLoadingLogout)

const selectIsAuthenticated = createSelector(selectAuth, (auth) => auth.isAuthenticated)

const authSelector = {
  selectAuthUser,
  selectIsLoading,
  selectIsLoadingRegister,
  selectIsLoadingLogout,
  selectIsAuthenticated,
}

export default authSelector
