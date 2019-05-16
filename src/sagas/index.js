import { fetchImg } from '../api/index';
import { put, take, fork } from 'redux-saga/effects';

export function* loadImages() {
    try {
        const images = yield fetchImg();
        yield put({ type: 'IMAGES_LOADED', images })
        yield put({type: 'IMAGE_SELECTED', image: images[0]})
    } catch (e) {
        yield put({type: 'IMAGE_LOAD_FAILURE', e})
    }
}

export function* watchForLoadImages() {
    while(true) {
        yield take('LOAD_IMAGES');
        yield fork(loadImages);
    }
}