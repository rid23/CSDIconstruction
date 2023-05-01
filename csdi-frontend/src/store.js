import { legacy_createStore as createStore } from 'redux'

export const store = createStore(storemanager)



let default_store = {
    homePageState : 1,
    cousePageState : 0,
    galleryPageState : 0,
    facultyPageState : 0,
    aboutPageState : 0,
    contactPageState : 0,
    dnldBrochure: 0
}



function storemanager(localStore = {
    homePageState : 1,
    cousePageState : 0,
    galleryPageState : 0,
    facultyPageState : 0,
    aboutPageState : 0,
    contactPageState : 0,
    dnldBrochure : 0
    }, action) {
    switch (action.type) {
        case "setHome" :
            return {...localStore, 
                homePageState : 1,
                cousePageState : 0,
                galleryPageState : 0,
                facultyPageState : 0,
                aboutPageState : 0,
                contactPageState : 0}
        case "setCourse" :
            return { ...localStore,
                homePageState : 0,
                cousePageState : 1,
                galleryPageState : 0,
                facultyPageState : 0,
                aboutPageState : 0,
                contactPageState : 0}
        case "setGallery" :
            return { ...localStore,
                homePageState : 0,
                cousePageState : 0,
                galleryPageState : 1,
                facultyPageState : 0,
                aboutPageState : 0,
                contactPageState : 0}
        case "setFaculty" :
            return { ...localStore,
                homePageState : 0,
                cousePageState : 0,
                galleryPageState : 0,
                facultyPageState : 1,
                aboutPageState : 0,
                contactPageState : 0}
        case "setAbout":
            return { ...localStore,
                homePageState : 0,
                cousePageState : 0,
                galleryPageState : 0,
                facultyPageState : 0,
                aboutPageState : 1,
                contactPageState : 0}
        case "setContact" :
            return { ...localStore,
                homePageState : 0,
                cousePageState : 0,
                galleryPageState : 0,
                facultyPageState : 0,
                aboutPageState : 0,
                contactPageState : 1}
        case "setPopupDnld":
            return {...localStore,
                dnldBrochure: 1}
        case "closeDnldPopup":
            return {...localStore,
                dnldBrochure: 0}
        default :
            return { ...localStore,
                homePageState : 1,
                cousePageState : 0,
                galleryPageState : 0,
                facultyPageState : 0,
                aboutPageState : 0,
                contactPageState : 0}
    }
}