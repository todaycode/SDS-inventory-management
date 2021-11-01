import React from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '@material-ui/core';

import { getSDSDetails } from 'api';
import { Header, StatementsTable } from 'components';

import useStyles from './styles';

const SDSInfoPage = ({ user }) => {
  const classes = useStyles();
  const params = useParams();
  const urlParams = new URLSearchParams(window.location?.search);
  const [sdsInfo, setSdsInfo] = React.useState(null);
  const [displayError, setDisplayError] = React.useState(false);

  React.useEffect(() => {
    const getSDSDetailsRequest = getSDSDetails(params.sdsID);
    getSDSDetailsRequest.then((response) => {
      if (response.status === 200) {
        setSdsInfo(response.data);
      } else {
        setDisplayError(true);
      }
    });
  }, [params]);

  return (
    <div className={classes.root}>
      <Header user={user} />
      <div className={classes.contentWrapper}>
        <div className={classes.locationNameWrapper}>
          <Typography className={classes.locationName}>
            Location: {urlParams.get('location')}
          </Typography>
        </div>
        {displayError ? (
          <div>Error....</div>
        ) : sdsInfo ? (
          <div className={classes.content}>
            <Typography className={classes.heading} variant={'h4'}>
              {sdsInfo.product_name}
            </Typography>
            <Typography className={classes.heading} variant={'h6'}>
              {sdsInfo.producer_name}
            </Typography>
            {sdsInfo.matched_pdf ? (
              <div>
                <div>
                  <div className={classes.informationBlockHeadingWrapper}>
                    <Typography className={classes.informationBlockHeading}>
                      General Information
                    </Typography>
                  </div>
                  <div className={classes.infoRow}>
                    <Typography className={classes.informationTitle}>
                      Product Name:
                    </Typography>
                    <Typography className={classes.informationValue}>
                      {sdsInfo.imported_sds_product_name}
                    </Typography>
                  </div>
                  {sdsInfo.matched_pdf.extracted_data.chemical_name && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        Chemical Name:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.chemical_name}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.substance_name && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        Substance Name:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.substance_name}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data
                    .chemical_name_synonyms && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        Chemical Name Synonyms:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {
                          sdsInfo.matched_pdf.extracted_data
                            .chemical_name_synonyms
                        }
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.product_identifier && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        Product Identifier:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.product_identifier}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.material_name && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        Material Name:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.material_name}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.cas_no && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        CAS №:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.cas_no}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.ec_no && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        EC №:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.ec_no}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.sds_no && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        SDS №:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.sds_no}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.reach_reg_no && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        REACH reg. №:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.reach_reg_no}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.revision_date && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        Revision date:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.revision_date}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.published_date && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        Published date:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.published_date}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.intented_use && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        Intented use:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.intented_use}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.used_advised_against && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        Used advised against:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {
                          sdsInfo.matched_pdf.extracted_data
                            .used_advised_against
                        }
                      </Typography>
                    </div>
                  )}
                </div>
                <div>
                  <div className={classes.informationBlockHeadingWrapper}>
                    <Typography className={classes.informationBlockHeading}>
                      Company Information
                    </Typography>
                  </div>
                  <div className={classes.infoRow}>
                    <Typography className={classes.informationTitle}>
                      Company Name:
                    </Typography>
                    <Typography className={classes.informationValue}>
                      {sdsInfo.imported_sds_company_name}
                    </Typography>
                  </div>
                  {sdsInfo.matched_pdf.extracted_data.address && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        Address:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.address}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.company_web_site && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        Company website:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.company_web_site}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.email && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        Email:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.email}
                      </Typography>
                    </div>
                  )}
                  {sdsInfo.matched_pdf.extracted_data.telephone && (
                    <div className={classes.infoRow}>
                      <Typography className={classes.informationTitle}>
                        Telephone:
                      </Typography>
                      <Typography className={classes.informationValue}>
                        {sdsInfo.matched_pdf.extracted_data.telephone}
                      </Typography>
                    </div>
                  )}
                </div>
                <div>
                  <div className={classes.informationBlockHeadingWrapper}>
                    <Typography className={classes.informationBlockHeading}>
                      GHS Information
                    </Typography>
                  </div>
                  <div className={classes.infoRow}>
                    <Typography className={classes.signalWord}>
                      Signal word:
                    </Typography>
                    <Typography className={classes.signalWord}>
                      {sdsInfo.matched_pdf.extracted_data.signal_word}
                    </Typography>
                  </div>
                  <div className={classes.ghsIconsWrapper}>
                    {sdsInfo.matched_pdf?.extracted_data?.ghs_pictograms.map(
                      (el, i) => (
                        <img
                          key={i}
                          src={el}
                          alt={'GHS'}
                          width={80}
                          height={80}
                        />
                      )
                    )}
                  </div>
                </div>
                <div>
                  <div className={classes.informationBlockHeadingWrapper}>
                    <Typography className={classes.informationBlockHeading}>
                      Hazard statements
                    </Typography>
                  </div>
                  <div className={classes.infoRow}>
                    <StatementsTable
                      statementCodes={
                        sdsInfo.matched_pdf?.extracted_data?.hazard_codes
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className={classes.informationBlockHeadingWrapper}>
                    <Typography className={classes.informationBlockHeading}>
                      Precautionary statements
                    </Typography>
                  </div>
                  <div className={classes.infoRow}>
                    <StatementsTable
                      statementCodes={
                        sdsInfo.matched_pdf?.extracted_data?.precautionary_codes
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className={classes.informationBlockHeadingWrapper}>
                    <Typography className={classes.informationBlockHeading}>
                      Other information
                    </Typography>
                  </div>
                  {Object.keys(sdsInfo.matched_pdf?.other_data).map((el, i) => (
                    <div>
                      <div className={classes.informationBlockHeadingWrapper}>
                        <Typography className={classes.informationBlockHeading}>
                          Section {el}
                        </Typography>
                      </div>
                      {sdsInfo.matched_pdf?.other_data[el].map(
                        (otherData, i) => (
                          <div key={i} className={classes.infoRow}>
                            <Typography className={classes.informationTitle}>
                              {otherData.default_literal
                                ? otherData.default_literal
                                : otherData.tag}
                            </Typography>
                            <Typography className={classes.informationValue}>
                              {otherData.value}
                            </Typography>
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={classes.errorBox}>
                <Typography className={classes.errorText}>
                  No matched PDF
                </Typography>
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SDSInfoPage;
