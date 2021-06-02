
export const useLocalStorage = (  ) => {
    
    const createLocalStorage = ( key = "pageBefore", pageBefore ) => {
        localStorage.setItem(  key ,  pageBefore  )
    }

    const obtainLocalStorage = ( key ) => {
        const lastPage = localStorage.getItem( key );
        return lastPage;
    }

    return [ createLocalStorage, obtainLocalStorage ];
}