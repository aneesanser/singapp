import React, { useEffect, useState } from "react";
import axios from "axios"; /* eslint-disable */
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
export default function FeaturedListing() {
  const [data, setData] = useState();
  const [show, setShow] = useState(3);
  const [loader, setLoader] = useState(false);
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
    <div class="listing">
      <p
        style={{
          writingMode: "vertical-rl",
          textOrientation: "sideways-right",
        }}
      >
        Featuring List
      </p>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {loader ? (
          data?.map((item, i) => (
            <>
              {i <= show ? (
                <Grid item sm={3} xs={12}>
                  <div class="card">
                    <img
                      src={
                        item?.images?.directory +
                        "Photo" +
                        item?.images?.ml_num +
                        "-" +
                        1 +
                        ".jpeg"
                      }
                      alt="Avatar"
                      style={{ width: "100%" }}
                    ></img>
                    <div class="container">
                      <p class="card-text">{item.addr}</p>
                      <p class="card-text">${item?.lp_dol}</p>

                      <p class="card-text">{item.br} BEDROOMS</p>

                      <p class="card-text">{item.bath_tot}BATHROOMS</p>
                    </div>
                  </div>
                </Grid>
              ) : (
                ""
              )}
            </>
          ))
        ) : (
          <div class="card" style={{ width: "18rem" }}>
            <div class="spinner-border text-info" role="status"></div>
          </div>
        )}
      </Grid>
      <Button variant="contained" color="primary" onClick={() => setShow(12)}>
        View all
      </Button>
    </div>
  );
}
