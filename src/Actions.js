import homeConnect from './HomeConnect';

//gets all topics for now for teaching
export const getTopics = () => {
    return (dispatch) => {
        return homeConnect.get('posts').then(response => {
            console.log(response.data);
            dispatch(_getTopics(response.data));
        }).catch(function(error) {
            console.log(error.response.data);
         });
    };
};