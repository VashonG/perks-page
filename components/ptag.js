import React from 'react'

const Ptag = (props) => {
  return (
    <>
      <div className="ptag-ptag Content">
        <label id="free" htmlFor="free" className="ptag-text">
          <span>Free</span>
        </label>
      </div>
      <style jsx>
        {`
          .ptag-ptag {
            display: flex;
            padding: 4px 11.600001335144043px 4px 11.800000190734863px;
            position: relative;
            align-items: center;
            border-radius: 9999px;
            flex-direction: column;
            background-color: #c7c7c7;
          }
          .ptag-text {
            color: rgba(34, 36, 44, 1);
            height: auto;
            font-size: 10.399999618530273px;
            font-style: Medium;
            text-align: center;
            font-family: Rubik;
            font-weight: 500;
            line-height: 15.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .ptag-ptag {
              background-color: var(--dl-color-gray-900);
            }
          }
        `}
      </style>
    </>
  )
}

export default Ptag
