import { legacy_createStore as createStore } from 'redux'

export const store = createStore(storemanager)



let default_store = {
    homePageState : 1,
    cousePageState : 0,
    galleryPageState : 0,
    facultyPageState : 0,
    aboutPageState : 0,
    contactPageState : 0
}



function storemanager(store = {
    homePageState : 1,
    cousePageState : 0,
    galleryPageState : 0,
    facultyPageState : 0,
    aboutPageState : 0,
    contactPageState : 0
    }, action) {
    switch (action.type) {
        case "setHome" :
            return {homePageState : 1,
                cousePageState : 0,
                galleryPageState : 0,
                facultyPageState : 0,
                aboutPageState : 0,
                contactPageState : 0}
        case "setCourse" :
            return {homePageState : 0,
                cousePageState : 1,
                galleryPageState : 0,
                facultyPageState : 0,
                aboutPageState : 0,
                contactPageState : 0}
        case "setGallery" :
            return {homePageState : 0,
                cousePageState : 0,
                galleryPageState : 1,
                facultyPageState : 0,
                aboutPageState : 0,
                contactPageState : 0}
        case "setFaculty" :
            return {homePageState : 0,
                cousePageState : 0,
                galleryPageState : 0,
                facultyPageState : 1,
                aboutPageState : 0,
                contactPageState : 0}
        case "setAbout":
            return {homePageState : 0,
                cousePageState : 0,
                galleryPageState : 0,
                facultyPageState : 0,
                aboutPageState : 1,
                contactPageState : 0}
        case "setContact" :
            return {homePageState : 0,
                cousePageState : 0,
                galleryPageState : 0,
                facultyPageState : 0,
                aboutPageState : 0,
                contactPageState : 1}
        default :
            return {homePageState : 1,
                cousePageState : 0,
                galleryPageState : 0,
                facultyPageState : 0,
                aboutPageState : 0,
                contactPageState : 0}
    }
}