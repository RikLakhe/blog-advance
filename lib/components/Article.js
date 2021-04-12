import React from 'react';

const styles= {
    article:{
        paddingBottom: 10,
        borderBottomStyle: 'solid',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: 10,
    }
};

const dateDisplay = dateString => new Date(dateString).toDateString();

const Article = (props) => {
    const {
        article,
        actions,
    } = props;

    const author = actions.lookupAuthor(article.authorId);
    
    return (
        <div>
            <div style={styles.article}>{article.title}</div>
            <div>{dateDisplay(article.date)}</div>
            <div><a href={author.website}>{author.firstName} {author.lastName}</a></div>
            <div>{article.body}</div>
        </div>
    );
};

export default Article;
