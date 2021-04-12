import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {
    let tree;
    beforeAll(() => {
        const testProps = {
            articles:{
                a:{id:'a'},
                b:{id:'b'}
            },
            articleActions : {
                lookupAuthor : jest.fn(()=>({}))
            }
        };

        tree = renderer.create(<ArticleList {...testProps} />).toJSON();
    });


    it('renders correctly',()=>{
        expect(tree.children.length).toBe(2);

        expect(tree).toMatchSnapshot();
    });
});
