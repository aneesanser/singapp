import React, { useEffect, useState } from "react";
import axios from "axios"; /* eslint-disable */
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
export default function FeaturedNighbourhoods() {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(3);
  useEffect(() => {
    featuredListApi(), [];
  });
  const featuredListApi = () => {
    setLoader(true);
    const url = "https://api.agentroof.ca/api/featured-listings";
    axios
      .get(url, {
        headers: {
          APPKEY: "5lUHd8zRP2959XuJ7A52ZIWd6Si2cDE5",
        },
      })
      .then(
        (response) => {
          setLoader(false);
          let responseData = response.data;
          console.log({ CCC: responseData });
          setData(responseData);
        },
        (error) => {}
      );
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        {" "}
        {data?.map((item, i) => (
          <>
            {i <= show ? (
              <Grid item sm={6} xs={12}>
                <div className="container21">
                  <img
                    src={
                      item?.images?.directory +
                      "Photo" +
                      item?.images?.ml_num +
                      "-" +
                      2 +
                      ".jpeg"
                    }
                    className="image22"
                    alt="..."
                  />
                  <div className="overlay11">
                    <div className="text12">{item.board}</div>
                    <span style={{ marginTop: 22 }} className="text12">
                      BUY | SELL | INVEST
                    </span>
                  </div>
                </div>
              </Grid>
            ) : (
              ""
            )}
          </>
        ))}
      </Grid>{" "}
      <Button
        className="muibutton"
        variant="contained"
        color="primary"
        onClick={() => setShow(9)}
      >
        View all
      </Button>
    </div>
  );
}
