import React from 'react'

import PropTypes from 'prop-types'

import Ptag from './ptag'

const Perk = (props) => {
  return (
    <>
      <div className={`perk-divbgwhite ${props.rootClassName} `}>
        <div className="perk-divp3">
          <div className="perk-divflex">
            <div className="perk-zendeskpng"></div>
            <header className="perk-divml2">
              <span className="perk-text">
                <span>Zendesk</span>
              </span>
              <div className="perk-divfontbody">
                <span className="perk-text02">
                  <span>
                    <span>Create a customer success</span>
                    <br></br>
                    <span>support suite that is...</span>
                  </span>
                </span>
              </div>
            </header>
          </div>
          <div className="perk-divminh24">
            <div className="perk-pfontheadings">
              <span className="perk-text07">
                <span>
                  <span>6 months free of both Zendesk</span>
                  <br></br>
                  <span>Suite and Sales CRM (any</span>
                  <br></br>
                  <span>edition) + 15% off for 12 months</span>
                </span>
              </span>
            </div>
            <span className="perk-text14">
              <span>Save up to $50000</span>
            </span>
          </div>
        </div>
        <div className="perk-divh12">
          <div className="perk-divflex1">
            <Ptag></Ptag>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .perk-divbgwhite {
            gap: -0.000012218952178955078px;
            width: 305.5px;
            height: 291.20001220703125px;
            display: flex;
            padding: 0.800000011920929px 0.800006091594696px 0.800000011920929px
              0.800000011920929px;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(239, 239, 239, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgba(255, 255, 255, 1);
          }
          .perk-divp3 {
            gap: 15.599998474121094px;
            display: flex;
            padding: 12px 12px 44.40000915527344px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .perk-divflex {
            gap: 8px;
            width: 278.8999938964844px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
          }
          .perk-zendeskpng {
            width: 73.5999984741211px;
            height: 73.5999984741211px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(239, 239, 239, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 1);
          }
          .perk-divml2 {
            gap: -0.7999992370605469px;
            display: flex;
            padding: 0.39999961853027344px 0 11.999998092651367px;
            align-items: flex-start;
            flex-direction: column;
          }
          .perk-text {
            color: rgba(34, 36, 44, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Rubik;
            font-weight: 500;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .perk-divfontbody {
            display: flex;
            padding: 0 45.30000305175781px 0 0;
            align-items: flex-start;
            flex-direction: column;
          }
          .perk-text02 {
            color: rgba(34, 36, 44, 1);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Rubik;
            font-weight: 400;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .perk-divminh24 {
            gap: 3.9999985694885254px;
            width: 278.8999938964844px;
            display: flex;
            padding: 0 12px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .perk-pfontheadings {
            width: 254.89999389648438px;
            display: flex;
            padding: 0 0.9592148065567017px 0 1.9407790899276733px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .perk-text07 {
            color: rgba(34, 36, 44, 1);
            height: auto;
            font-size: 16px;
            font-style: ExtraBold;
            text-align: center;
            font-family: Mulish;
            font-weight: 800;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .perk-text14 {
            color: rgba(162, 169, 191, 1);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Rubik;
            font-weight: 400;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .perk-divh12 {
            display: flex;
            padding: 8.800000190734863px 70.18998718261719px 7.999999046325684px
              16px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(239, 239, 239, 1);
            border-style: solid;
            border-width: 0.800000011920929px 0 0;
          }
          .perk-divflex1 {
            height: 31.200000762939453px;
            display: flex;
            padding: 3.799999952316284px 170.30999755859375px
              3.400000810623169px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .perk-root-class-name {
            top: -1520.000732421875px;
            left: 320.5000305175781px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

Perk.defaultProps = {
  rootClassName: '',
}

Perk.propTypes = {
  rootClassName: PropTypes.string,
}

export default Perk
