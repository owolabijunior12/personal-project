export const actionType = {
  SET_USER: "SET_USER",
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_FILTER_TERM: "SET_FILTER_TERM",
  SET_PRODUCT: "SET_PRODUCT",
  SET_FILTER: "SET_FILTER",
  SET_FILTER_BY_NEW_OLD: "SET_FILTER_BY_NEW_OLD",
  SET_ALL_USERS: "SET_ALL_USERS",
  SET_PRODUCT_INDEX:"SET_PRODUCT_INDEX"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      
      };
    case actionType.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    case actionType.SET_FILTER_TERM:
      return {
        ...state,
        filterTerm: action.filterTerm,
      };
    case actionType.SET_ARTISTS:
      return {
        ...state,
        allArtists: action.artists,
      };
    case actionType.SET_MUSICS:
      return {
        ...state,
        allMusics: action.musics,
      };
    case actionType.SET_ARTIST_FILTER:
      return {
        ...state,
        artistFilter: action.artistFilter,
      };
    case actionType.SET_LANGUAGE_FILTER:
      return {
        ...state,
        languageFilter: action.languageFilter,
      };
    case actionType.SET_ALL_USERS:
      return {
        ...state,
        allUsers: action.allUsers,
      };
    case actionType.SET_ALL_SONGS:
      return {
        ...state,
        allMusics: action.musics,
      };
    case actionType.SET_ALL_ALBUMS:
      return {
        ...state,
        allAlbums: action.allAlbums,
      };
    case actionType.SET_ALBUM_FILTER:
      return {
        ...state,
        albumFilter: action.albumFilter,
      };
    case actionType.SET_SONG:
      return {
        ...state,
        allMusics: action.musics,
      };
    case actionType.SET_SONG_PLAYING:
      return {
        ...state,
        isSongPlaying: action.isSongPlaying,
      };
    case actionType.SET_MUSICS_INDEX:
      return {
        ...state,
        musicIndex: action.musicIndex,
      };
    case actionType.SET_MINI_PLAYER:
      return {
        ...state,
        miniPlayer: action.miniPlayer,
      };
    default:
      return state;
  }
};

export default reducer;
