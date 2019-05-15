import React, {Component} from "react";
import GridList from "@material-ui/core/GridList";
import GridListItem from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    component: {
        margin: '20px'
    }

});

class Article extends Component {
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
                        .filter(article => article.url.split("")[4] === "s")
                        .map((article, index) => {
                            const articleImg = article.urlToImage;
                            return (
                                <GridListItem
                                    key={`${index}${article.urlToImage}`}
                                >
                                    {article.urlToImage !== null ? (
                                        <img
                                            className={"articleImage"}
                                            srcSet={`${articleImg},
                                                ${process.env.PUBLIC_URL}/loading_icon.gif`}
                                            src={`${process.env.PUBLIC_URL}/loading_icon.gif`}
                                            alt={article.title.slice(0, 15)}
                                        />
                                    ) : (
                                        <img
                                            className={"articleImage"}
                                            src={process.env.PUBLIC_URL + "/news.jpg"}
                                            alt={article.title.slice(0, 15)}
                                        />
                                    )}

                                    <GridListTileBar
                                        title={article.title}
                                        subtitle={<span>by: {article.author}</span>}
                                        actionIcon={
                                            <a href={article.url}>
                                                <IconButton children={InfoIcon} className={"infoButton"}>
                                                    <InfoIcon/>
                                                </IconButton>
                                            </a>
                                        }
                                    />
                                </GridListItem>
                            );
                        })}
                </GridList>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Article)
