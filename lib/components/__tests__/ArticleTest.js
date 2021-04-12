import React from 'react';
import Article from '../Article';

import renderer from 'react-test-renderer';

describe('Article', () => {
    let tree;
    beforeAll(() => {
        const testProps = {
            article : {id:'a',authorId:'testauthorid',title:'titletest',date:'date',body:'bodytest'},
            actions : {
                lookupAuthor : jest.fn(()=>({ firstName: 'test', lastName:'testlast',website:'http://test.com'}))
            }
        };

        tree = renderer.create(<Article {...testProps} />).toJSON();
    });


    it('renders correctly',()=>{
        expect(tree.children.length).toBe(4);
        expect(tree).toMatchSnapshot();
    });
});
