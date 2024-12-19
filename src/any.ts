import axios from "axios";
export { };

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// axios.get(url).then(function (response) {
//     // console.log(response);
//     console.log(response.data);
// });

axios.get(url).then(function (response) {
    interface Artcle {
        id: number;
        title: string;
        description: string;
    };
    let data: Artcle[];
    data = response.data;

    data = [
        {
            id: 1,
            title: 'title',
            description: 'description'
        }
    ]

    console.log(data);
})