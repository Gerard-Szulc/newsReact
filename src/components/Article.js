import React, { Component } from "react";
import Moment from "react-moment";
import IronImage from "react-image-lazy-load-component";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import GridList from "@material-ui/core/GridList";
import GridListItem from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/es/CardHeader/CardHeader";
import ListSubheader from "@material-ui/core/es/ListSubheader/ListSubheader";
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from "@material-ui/core/es/GridListTileBar/GridListTileBar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";

export default class Article extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.handleRefresh}>Reload</Button>
        <GridList
          className={"news-container"}
          style={{ marginLeft: "auto", marginRight: "auto" }}
          cols={4}
        >
          {this.props.articles
            .filter(article => article.url.split("")[4] === "s")
            .map((article, index) => {
              const articleImg = article.urlToImage;
              return (
                  <GridListItem
                      key={article.urlToImage}
                  >
                    {article.urlToImage !== null ? (
                      <img
                        className={"articleImage"}
                        src={articleImg}
                        placeholder={
                          process.env.PUBLIC_URL + "/loading_icon.gif"
                        }
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
      </div>
    );
  }
}
