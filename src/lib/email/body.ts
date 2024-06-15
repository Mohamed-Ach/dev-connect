export const constructHtml = (param: string): string => {
    return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Email Confirmation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style type="text/css">
          body,
          table,
          td,
          a {
            -ms-text-size-adjust: 100%; /* 1 */
            -webkit-text-size-adjust: 100%; /* 2 */
          }
          table,
          td {
            mso-table-rspace: 0pt;
            mso-table-lspace: 0pt;
          }
    
          img {
            -ms-interpolation-mode: bicubic;
          }
          a[x-apple-data-detectors] {
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            color: inherit !important;
            text-decoration: none !important;
          }
          div[style*='margin: 16px 0;'] {
            margin: 0 !important;
          }
          body {
            width: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          table {
            border-collapse: collapse !important;
          }
          a {
            color: #1a82e2;
          }
        </style>
      </head>
      <body style="background-color: #ffffff">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center" bgcolor="#ffffff">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
                <tr>
                  <td
                    align="left"
                    bgcolor="#ffffff"
                    style="
                      padding: 36px 24px 0;
                      font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                      border-top: 3px solid #ffffff;
                    "
                  >
                    <h1
                      style="
                        margin: 0;
                        font-size: 32px;
                        font-weight: 700;
                        letter-spacing: -1px;
                        line-height: 48px;
                      "
                    >
                      Confirm Your Email Address
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" bgcolor="#ffffff">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
                <tr>
                  <td
                    align="left"
                    bgcolor="#ffffff"
                    style="
                      padding: 24px;
                      font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                      font-size: 16px;
                      line-height: 24px;
                    "
                  >
                    <p style="margin: 0">
                      Tap the button below to confirm your email address. If you didn't create an
                      account with <strong>DevConnect</strong>, you can safely delete this email.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center" bgcolor="#ffffff" style="padding: 12px">
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td align="center" bgcolor="#1a82e2" style="border-radius: 6px">
                                <a
                                  href=${param}
                                  target="_blank"
                                  style="
                                    display: inline-block;
                                    padding: 16px 36px;
                                    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                                    font-size: 16px;
                                    color: #ffffff;
                                    text-decoration: none;
                                    border-radius: 6px;
                                  "
                                  >Confirm</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    align="left"
                    bgcolor="#ffffff"
                    style="
                      padding: 24px;
                      font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                      font-size: 16px;
                      line-height: 24px;
                    "
                  >
                    <p style="margin: 0">
                      If that doesn't work, copy and paste the following link in your browser:
                    </p>
                    <p style="margin: 0">
                      <a href=${param}target="_blank"
                        >${param}</a
                      >
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    align="left"
                    bgcolor="#ffffff"
                    style="
                      padding: 24px;
                      font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                      font-size: 16px;
                      line-height: 24px;
                      border-bottom: 3px solid #ffffff;
                    "
                  >
                    <p style="margin: 0">
                      Cheers,<br />
                      DevConnect Support
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    
      
      
  `
}





const text = `
      <!DOCTYPE html>
  
      <html
        lang="en"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:v="urn:schemas-microsoft-com:vml"
      >
        <head>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <style>
            * {
              box-sizing: border-box;
            }
      
            body {
              margin: 0;
              padding: 0;
            }
      
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
      
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
      
            p {
              line-height: inherit;
            }
      
            .desktop_hide,
            .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
            }
      
            .image_block img + div {
              display: none;
            }
      
            @media (max-width: 640px) {
              .desktop_hide table.icons-inner {
                display: inline-block !important;
              }
      
              .icons-inner {
                text-align: center;
              }
      
              .icons-inner td {
                margin: 0 auto;
              }
      
              .image_block div.fullWidth {
                max-width: 100% !important;
              }
      
              .mobile_hide {
                display: none;
              }
      
              .row-content {
                width: 100% !important;
              }
      
              .stack .column {
                width: 100%;
                display: block;
              }
      
              .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
              }
      
              .desktop_hide,
              .desktop_hide table {
                display: table !important;
                max-height: none !important;
              }
      
              .reverse {
                display: table;
                width: 100%;
              }
      
              .reverse .column.last {
                display: table-header-group !important;
              }
      
              .row-3 td.column.last .border {
                padding: 25px 20px 20px;
                border-top: 0;
                border-right: 0px;
                border-bottom: 0;
                border-left: 0;
              }
      
              .row-1 .column-1 {
                padding: 20px 20px 5px !important;
              }
      
              .row-1 .column-3 {
                padding: 5px 20px 25px !important;
              }
            }
          </style>
        </head>
        <body
          style="
            background-color: #ffffff;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
          "
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="nl-container"
            role="presentation"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              background-color: #ffffff;
            "
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-1"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #ffffff;
                              border-bottom: 0 solid #ffffff;
                              border-left: 0 solid #ffffff;
                              border-radius: 0;
                              border-right: 0px solid #ffffff;
                              border-top: 0 solid #ffffff;
                              color: #000000;
                              width: 620px;
                              margin: 0 auto;
                            "
                            width="620"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    padding-top: 5px;
                                    vertical-align: middle;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="25%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="icons_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          vertical-align: middle;
                                          color: #000000;
                                          font-family: inherit;
                                          font-size: 14px;
                                          font-weight: 400;
                                          text-align: center;
                                        "
                                      >
                                        <table
                                          align="center"
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="alignment"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                          "
                                        >
                                          <tr>
                                            <td
                                              style="
                                                vertical-align: middle;
                                                text-align: center;
                                                padding-top: 0px;
                                                padding-bottom: 0px;
                                                padding-left: 0px;
                                                padding-right: 0px;
                                              "
                                            >
                                              <img
                                                align="center"
                                                class="icon"
                                                height="32"
                                                src="https://4757f626dd99a9.imgdist.com/public/users/Integrators/BeeProAgency/1143900_1129549/imported/d33d6e-20240210-190239/2_logo_01_alt.png"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  margin: 0 auto;
                                                  border: 0;
                                                "
                                                width="177"
                                              />
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    padding-top: 5px;
                                    vertical-align: middle;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="50%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="empty_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-3"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    padding-top: 5px;
                                    vertical-align: middle;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="25%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="empty_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-2"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #ffffff;
                              border-bottom: 0 solid #e6e6e6;
                              border-left: 0 solid #e6e6e6;
                              border-right: 0px solid #e6e6e6;
                              border-top: 0 solid #e6e6e6;
                              color: #000000;
                              width: 620px;
                              margin: 0 auto;
                            "
                            width="620"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 40px;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    padding-top: 40px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="heading_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-top: 10px;
                                          text-align: center;
                                          width: 100%;
                                        "
                                      >
                                        <h1
                                          style="
                                            margin: 0;
                                            color: #393d47;
                                            direction: ltr;
                                            font-family: 'Playfair Display', Georgia,
                                              serif;
                                            font-size: 38px;
                                            font-weight: 400;
                                            letter-spacing: normal;
                                            line-height: 120%;
                                            text-align: center;
                                            margin-top: 0;
                                            margin-bottom: 0;
                                            mso-line-height-alt: 45.6px;
                                          "
                                        >
                                          <span class="tinyMce-placeholder"
                                            >Confirm Your Email!</span
                                          >
                                        </h1>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          width: 100%;
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                      >
                                        <div
                                          align="center"
                                          class="alignment"
                                          style="line-height: 10px"
                                        >
                                          <div
                                            class="fullWidth"
                                            style="max-width: 248px"
                                          >
                                            <img
                                              alt="Confirm subscription"
                                              src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8146/confirm.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                                width: 100%;
                                              "
                                              title="Confirm subscription"
                                              width="248"
                                            />
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-top: 20px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            direction: ltr;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                            font-size: 16px;
                                            font-weight: 400;
                                            letter-spacing: 0px;
                                            line-height: 150%;
                                            text-align: center;
                                            mso-line-height-alt: 24px;
                                          "
                                        >
                                          <p style="margin: 0">
                                            We're excited to have you on board! Before
                                            we get started, we need you to confirm
                                            your email. Please click the button below
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="button_block block-4"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-top: 10px;
                                          text-align: center;
                                        "
                                      >
                                        <div align="center" class="alignment">
                                          <a
                                            href={param}
                                            style="
                                              text-decoration: none;
                                              display: inline-block;
                                              color: #ffffff;
                                              background-color: #4d4997;
                                              border-radius: 0px;
                                              width: auto;
                                              border-top: 1px solid #4d4997;
                                              font-weight: 400;
                                              border-right: 1px solid #4d4997;
                                              border-bottom: 1px solid #4d4997;
                                              border-left: 1px solid #4d4997;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              font-family: Montserrat, Trebuchet MS,
                                                Lucida Grande, Lucida Sans Unicode,
                                                Lucida Sans, Tahoma, sans-serif;
                                              font-size: 16px;
                                              text-align: center;
                                              mso-border-alt: none;
                                              word-break: keep-all;
                                            "
                                            target="_blank"
                                            ><span
                                              style="
                                                padding-left: 20px;
                                                padding-right: 20px;
                                                font-size: 16px;
                                                display: inline-block;
                                                letter-spacing: normal;
                                              "
                                              ><span
                                                style="
                                                  word-break: break-word;
                                                  line-height: 32px;
                                                "
                                                >Confirm</span
                                              ></span
                                            ></a
                                          >
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-3"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #ffffff;
                              border-top: 0 solid #e6e6e6;
                              color: #000000;
                              width: 620px;
                              margin: 0 auto;
                            "
                            width="620"
                          >
                            <tbody>
                              <tr class="reverse">
                                <td
                                  class="column column-1 last"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 20px;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    padding-top: 25px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <div class="border">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="icons_block block-1"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="pad"
                                          style="
                                            vertical-align: middle;
                                            color: #000000;
                                            font-family: inherit;
                                            font-size: 14px;
                                            font-weight: 400;
                                            text-align: center;
                                          "
                                        >
                                          <table
                                            align="center"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="alignment"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                          >
                                            <tr>
                                              <td
                                                style="
                                                  vertical-align: middle;
                                                  text-align: center;
                                                  padding-top: 0px;
                                                  padding-bottom: 0px;
                                                  padding-left: 0px;
                                                  padding-right: 0px;
                                                "
                                              >
                                                <img
                                                    align="center"
                                                    alt="Logo"
                                                    class="icon"
                                                    height="32"
                                                    src="https://4757f626dd99a9.imgdist.com/public/users/Integrators/BeeProAgency/1143900_1129549/imported/d33d6e-20240210-190239/1_logo_03_alt.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      margin: 0 auto;
                                                      border: 0;
                                                    "
                                                    width="146"
                                                />
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="text_block block-2"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        word-break: break-word;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td class="pad" style="padding-top: 15px">
                                          <div style="font-family: sans-serif">
                                            <div
                                              class=""
                                              style="
                                                font-size: 12px;
                                                font-family: Montserrat, Trebuchet MS,
                                                  Lucida Grande, Lucida Sans Unicode,
                                                  Lucida Sans, Tahoma, sans-serif;
                                                mso-line-height-alt: 14.399999999999999px;
                                                color: #555555;
                                                line-height: 1.2;
                                              "
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  font-size: 16px;
                                                  text-align: center;
                                                  mso-line-height-alt: 19.2px;
                                                "
                                              >
                                                <span style="font-size: 14px"
                                                  >DecConnect © All rights reserved</span
                                                >
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>    
      `


