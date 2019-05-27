import React, {Component} from "react";
import GridList from "@material-ui/core/GridList/index";
import Button from "@material-ui/core/Button/index";
import Paper from "@material-ui/core/Paper/index";
import Article from '../components/article'
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    component: {
        margin: '0px'
    }

});

class ArticlesPage extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.component}>
                <Paper className={classes.root} elevation={1}>
                <Button onClick={this.props.handleRefresh}>Reload</Button>
                <GridList
                    className={"news-container"}
                    style={{marginLeft: "auto", marginRight: "auto"}}
                    cols={4}
                >
                    {this.props.articles
                        .filter((article, index) => article.url.split("")[4] === "s" && index < 20)
                        .map((article, index) => {
                            const articleImg = article.urlToImage;
                            return (
                               <Article
                                   articleImg={articleImg}
                                   article={article}
                                   classes={classes}
                                   index={index}
                                   key={`${index}${this.props.articleImg}`}
                               />
                            );
                        })}
                </GridList>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ArticlesPage)
