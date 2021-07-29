import reducer from '../../reducers/index';

import libraryApi from "../../../services/Api/blogApi";
test('initial state of post', () => {
    expect(reducer(undefined, {})).toEqual(
        {"errors": {"message": null}, "post": {"post": null}}
    )
})

it('test url works with async/await', async () => {
    const data = await libraryApi.get("posts");
});
