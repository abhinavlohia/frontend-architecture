import { baseApi as api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    usersControllerCreate: build.mutation<
      UsersControllerCreateApiResponse,
      UsersControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/users`,
        method: "POST",
        body: queryArg.createUserDto,
      }),
    }),
    usersControllerFindAll: build.query<
      UsersControllerFindAllApiResponse,
      UsersControllerFindAllApiArg
    >({
      query: () => ({ url: `/users` }),
    }),
    usersControllerFindOne: build.query<
      UsersControllerFindOneApiResponse,
      UsersControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
    }),
    usersControllerUpdate: build.mutation<
      UsersControllerUpdateApiResponse,
      UsersControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateUserDto,
      }),
    }),
    usersControllerRemove: build.mutation<
      UsersControllerRemoveApiResponse,
      UsersControllerRemoveApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.id}`, method: "DELETE" }),
    }),
    authControllerRegister: build.mutation<
      AuthControllerRegisterApiResponse,
      AuthControllerRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/register`,
        method: "POST",
        body: queryArg.registerDto,
      }),
    }),
    authControllerLogin: build.mutation<
      AuthControllerLoginApiResponse,
      AuthControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/login`,
        method: "POST",
        body: queryArg.loginDto,
      }),
    }),
    authControllerRefresh: build.mutation<
      AuthControllerRefreshApiResponse,
      AuthControllerRefreshApiArg
    >({
      query: () => ({ url: `/auth/refresh`, method: "POST" }),
    }),
    authControllerLogout: build.mutation<
      AuthControllerLogoutApiResponse,
      AuthControllerLogoutApiArg
    >({
      query: () => ({ url: `/auth/logout`, method: "POST" }),
    }),
    profileControllerGetMyProfile: build.query<
      ProfileControllerGetMyProfileApiResponse,
      ProfileControllerGetMyProfileApiArg
    >({
      query: () => ({ url: `/profile/me` }),
    }),
    profileControllerStartOnboarding: build.mutation<
      ProfileControllerStartOnboardingApiResponse,
      ProfileControllerStartOnboardingApiArg
    >({
      query: () => ({ url: `/profile/start`, method: "POST" }),
    }),
    profileControllerSubmitProfileInfo: build.mutation<
      ProfileControllerSubmitProfileInfoApiResponse,
      ProfileControllerSubmitProfileInfoApiArg
    >({
      query: (queryArg) => ({
        url: `/profile/step/profile-info`,
        method: "PATCH",
        body: queryArg.profileInfoDto,
      }),
    }),
    profileControllerSubmitProfessional: build.mutation<
      ProfileControllerSubmitProfessionalApiResponse,
      ProfileControllerSubmitProfessionalApiArg
    >({
      query: (queryArg) => ({
        url: `/profile/step/professional`,
        method: "PATCH",
        body: queryArg.professionalDetailsDto,
      }),
    }),
    profileControllerSubmitPreferences: build.mutation<
      ProfileControllerSubmitPreferencesApiResponse,
      ProfileControllerSubmitPreferencesApiArg
    >({
      query: (queryArg) => ({
        url: `/profile/step/preferences`,
        method: "PATCH",
        body: queryArg.preferencesDto,
      }),
    }),
    profileControllerSubmitIntent: build.mutation<
      ProfileControllerSubmitIntentApiResponse,
      ProfileControllerSubmitIntentApiArg
    >({
      query: (queryArg) => ({
        url: `/profile/step/intent`,
        method: "PATCH",
        body: queryArg.intentDto,
      }),
    }),
    profileControllerSaveDraft: build.mutation<
      ProfileControllerSaveDraftApiResponse,
      ProfileControllerSaveDraftApiArg
    >({
      query: (queryArg) => ({
        url: `/profile/draft/${queryArg.step}`,
        method: "POST",
      }),
    }),
    profileControllerGetDraft: build.query<
      ProfileControllerGetDraftApiResponse,
      ProfileControllerGetDraftApiArg
    >({
      query: (queryArg) => ({ url: `/profile/draft/${queryArg.step}` }),
    }),
    masterDataControllerGetIntents: build.query<
      MasterDataControllerGetIntentsApiResponse,
      MasterDataControllerGetIntentsApiArg
    >({
      query: (queryArg) => ({
        url: `/master/intents`,
        params: {
          fields: queryArg.fields,
        },
      }),
    }),
    masterDataControllerGetRegions: build.query<
      MasterDataControllerGetRegionsApiResponse,
      MasterDataControllerGetRegionsApiArg
    >({
      query: (queryArg) => ({
        url: `/master/regions`,
        params: {
          fields: queryArg.fields,
        },
      }),
    }),
    masterDataControllerGetSubregions: build.query<
      MasterDataControllerGetSubregionsApiResponse,
      MasterDataControllerGetSubregionsApiArg
    >({
      query: (queryArg) => ({
        url: `/master/subregions/${queryArg.regionId}`,
        params: {
          fields: queryArg.fields,
        },
      }),
    }),
    masterDataControllerGetCountries: build.query<
      MasterDataControllerGetCountriesApiResponse,
      MasterDataControllerGetCountriesApiArg
    >({
      query: (queryArg) => ({
        url: `/master/countries`,
        params: {
          fields: queryArg.fields,
        },
      }),
    }),
    masterDataControllerGetStates: build.query<
      MasterDataControllerGetStatesApiResponse,
      MasterDataControllerGetStatesApiArg
    >({
      query: (queryArg) => ({
        url: `/master/states/${queryArg.countryId}`,
        params: {
          fields: queryArg.fields,
        },
      }),
    }),
    masterDataControllerGetCities: build.query<
      MasterDataControllerGetCitiesApiResponse,
      MasterDataControllerGetCitiesApiArg
    >({
      query: (queryArg) => ({
        url: `/master/cities/${queryArg.stateId}`,
        params: {
          fields: queryArg.fields,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedApi };
export type UsersControllerCreateApiResponse = unknown;
export type UsersControllerCreateApiArg = {
  createUserDto: CreateUserDto;
};
export type UsersControllerFindAllApiResponse = unknown;
export type UsersControllerFindAllApiArg = void;
export type UsersControllerFindOneApiResponse = unknown;
export type UsersControllerFindOneApiArg = {
  id: string;
};
export type UsersControllerUpdateApiResponse = unknown;
export type UsersControllerUpdateApiArg = {
  id: string;
  updateUserDto: UpdateUserDto;
};
export type UsersControllerRemoveApiResponse = unknown;
export type UsersControllerRemoveApiArg = {
  id: string;
};
export type AuthControllerRegisterApiResponse = unknown;
export type AuthControllerRegisterApiArg = {
  registerDto: RegisterDto;
};
export type AuthControllerLoginApiResponse = unknown;
export type AuthControllerLoginApiArg = {
  loginDto: LoginDto;
};
export type AuthControllerRefreshApiResponse = unknown;
export type AuthControllerRefreshApiArg = void;
export type AuthControllerLogoutApiResponse = unknown;
export type AuthControllerLogoutApiArg = void;
export type ProfileControllerGetMyProfileApiResponse = unknown;
export type ProfileControllerGetMyProfileApiArg = void;
export type ProfileControllerStartOnboardingApiResponse = unknown;
export type ProfileControllerStartOnboardingApiArg = void;
export type ProfileControllerSubmitProfileInfoApiResponse = unknown;
export type ProfileControllerSubmitProfileInfoApiArg = {
  profileInfoDto: ProfileInfoDto;
};
export type ProfileControllerSubmitProfessionalApiResponse = unknown;
export type ProfileControllerSubmitProfessionalApiArg = {
  professionalDetailsDto: ProfessionalDetailsDto;
};
export type ProfileControllerSubmitPreferencesApiResponse = unknown;
export type ProfileControllerSubmitPreferencesApiArg = {
  preferencesDto: PreferencesDto;
};
export type ProfileControllerSubmitIntentApiResponse = unknown;
export type ProfileControllerSubmitIntentApiArg = {
  intentDto: IntentDto;
};
export type ProfileControllerSaveDraftApiResponse = unknown;
export type ProfileControllerSaveDraftApiArg = {
  step: string;
};
export type ProfileControllerGetDraftApiResponse = unknown;
export type ProfileControllerGetDraftApiArg = {
  step: string;
};
export type MasterDataControllerGetIntentsApiResponse = unknown;
export type MasterDataControllerGetIntentsApiArg = {
  fields: string;
};
export type MasterDataControllerGetRegionsApiResponse = unknown;
export type MasterDataControllerGetRegionsApiArg = {
  fields: string;
};
export type MasterDataControllerGetSubregionsApiResponse = unknown;
export type MasterDataControllerGetSubregionsApiArg = {
  regionId: number;
  fields: string;
};
export type MasterDataControllerGetCountriesApiResponse = unknown;
export type MasterDataControllerGetCountriesApiArg = {
  fields: string;
};
export type MasterDataControllerGetStatesApiResponse = unknown;
export type MasterDataControllerGetStatesApiArg = {
  countryId: number;
  fields: string;
};
export type MasterDataControllerGetCitiesApiResponse = unknown;
export type MasterDataControllerGetCitiesApiArg = {
  stateId: number;
  fields: string;
};
export type CreateUserDto = {};
export type UpdateUserDto = {};
export type RegisterDto = {};
export type LoginDto = {};
export type ProfileInfoDto = {};
export type ProfessionalDetailsDto = {};
export type PreferencesDto = {};
export type IntentDto = {};
export const {
  useUsersControllerCreateMutation,
  useUsersControllerFindAllQuery,
  useUsersControllerFindOneQuery,
  useUsersControllerUpdateMutation,
  useUsersControllerRemoveMutation,
  useAuthControllerRegisterMutation,
  useAuthControllerLoginMutation,
  useAuthControllerRefreshMutation,
  useAuthControllerLogoutMutation,
  useProfileControllerGetMyProfileQuery,
  useProfileControllerStartOnboardingMutation,
  useProfileControllerSubmitProfileInfoMutation,
  useProfileControllerSubmitProfessionalMutation,
  useProfileControllerSubmitPreferencesMutation,
  useProfileControllerSubmitIntentMutation,
  useProfileControllerSaveDraftMutation,
  useProfileControllerGetDraftQuery,
  useMasterDataControllerGetIntentsQuery,
  useMasterDataControllerGetRegionsQuery,
  useMasterDataControllerGetSubregionsQuery,
  useMasterDataControllerGetCountriesQuery,
  useMasterDataControllerGetStatesQuery,
  useMasterDataControllerGetCitiesQuery,
} = injectedRtkApi;
