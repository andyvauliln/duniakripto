import React from 'reactn';
import styled from 'styled-components';
import { layout, position, space } from 'styled-system';
import { fontSizes } from 'tz-config';

const Icons = ({ type, ...props }) => {
  switch (type) {
    case 'tx_activate_account':
    case 'tx_activation':
      return (
        <Wrapper {...props} viewBox="0 0 512 512" stroke="none" strokeWidth="24" fill="none" fillRule="evenodd">
          <g transform="translate(93.000000, 92.000000)">
            <path
              className="color-fill"
              d="M328.262494,4.47752474 C327.945279,3.12822612 326.993633,2.09640953 325.645469,1.7789275 C282.504193,-8.77734993 182.819298,28.8442704 128.813401,82.8955857 C118.265993,93.4518632 109.621877,103.8494 102.563838,113.929454 C85.9100369,112.421414 69.2562358,113.691342 55.060853,119.882242 C15.0124266,137.502495 3.35476583,183.537389 0.103309429,203.300645 C-0.689728717,207.983505 3.1961582,212.031401 7.87508326,211.555178 L72.1904769,204.491203 C72.2697808,210.682102 72.6662998,215.603074 73.0628189,219.016005 C73.3800342,222.349567 74.8868066,225.445016 77.2659211,227.826132 L102.167319,252.748471 C104.546433,255.129586 107.639282,256.637626 110.970042,256.955108 C114.380106,257.35196 119.296943,257.748813 125.403337,257.828183 L118.345297,322.118294 C117.869474,326.801154 121.913969,330.690309 126.592894,329.896604 C146.339544,326.721783 192.41506,315.054319 209.941203,274.972213 C216.126901,260.764892 217.395762,244.176456 215.968293,227.58802 C226.039877,220.524045 236.507981,211.87266 247.055388,201.316382 C301.299197,147.344437 338.651294,49.7980843 328.262494,4.47752474 Z M198.838669,131.390966 C185.594932,118.136091 185.594932,96.7060539 198.838669,83.4511793 C212.082406,70.1963046 233.494436,70.1963046 246.738173,83.4511793 C259.98191,96.7060539 259.98191,118.136091 246.738173,131.390966 C233.494436,144.64584 212.082406,144.64584 198.838669,131.390966 Z"
              fillRule="nonzero"
            />
            <path
              className="color-stroke"
              d="M85.3714318,284.653214 C82.0291323,287.998487 76.0607403,289.910072 69.614877,291.025163 C55.1315792,293.494294 42.4785883,280.830045 44.9455236,266.33386 C46.0596234,259.882262 47.8899303,253.90856 51.2322298,250.642936 L51.3118084,250.563286 C53.1421152,248.731351 51.6301226,245.704675 49.0836087,246.023273 C41.2849099,246.979065 33.6453682,250.483637 27.6769762,256.457339 C13.3528355,270.794225 12,324 12,324 C12,324 65.2380563,322.645961 79.5621969,308.309075 C85.6101675,302.255724 89.0320455,294.689034 89.9869882,286.883396 C90.2257239,284.334617 87.1221601,282.821279 85.3714318,284.653214 Z"
            />
          </g>
        </Wrapper>
      );

    case 'tx_reveal':
    case 'tx_set_baker_consensus_key':
    case 'tx_set_baker_pvss_key':
      return (
        <Wrapper {...props} viewBox="0 0 512 512" stroke="none" strokeWidth="36" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <path
            className="color-stroke"
            d="M398.991008,106.202643 L366.991008,138.202643 L398.991008,106.202643 Z M246.360696,258.404734 C268.667624,280.290226 277.470474,312.382981 269.427358,342.499397 C261.384243,372.615813 237.728522,396.137728 207.440787,404.135348 C177.153051,412.132969 144.877735,403.379911 122.867746,381.19916 C89.774125,347.128619 90.2474103,292.971787 123.931484,259.478244 C157.615558,225.9847 212.080465,225.514092 246.344819,258.420522 L246.360696,258.404734 Z M246.546311,257.940233 L311.546311,192.940233 L246.546311,257.940233 Z M311.692018,193.339325 L359.23048,240.877787 L414.692018,185.416248 L367.153557,137.877787 L311.692018,193.339325 Z M310.796834,193.18971 L366.796834,138.18971 L310.796834,193.18971 Z"
            transform="translate(256.523341, 256.624369) rotate(-315.000000) translate(-256.523341, -256.624369) "
          />
        </Wrapper>
      );
    case 'tx_invoice':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </g>
        </Wrapper>
      );
    case 'tx_airdrop':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="color-stroke" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </Wrapper>
      );
    case 'bakers':
    case 'tx_bake':
    case 'tx_baking':
    case 'tx_delegation_register':
    case 'tx_baker_registration':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" stroke="none" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <path
            className="color-stroke"
            d="M16.7418004,7.1561815 C15.7025639,3.69686778 11.7531505,1.49855543 7.65522289,2.09843394 C3.55729528,2.69831246 0.677278616,5.89635656 1.02905025,9.4563054 C1.38082187,13.0162542 4.13286935,14.7484034 6.76248392,14.7484034 L6.76248392,22 L18.0014381,22 L18.0014381,14.7484034 C20.7620676,14.7484034 23,13.824969 23,11.4522924 C23,9.07961589 20.7620676,7.1561815 18.0014381,7.1561815 L16.7418004,7.1561815 Z"
          />
        </Wrapper>
      );
    case 'tx_endorsement':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="color-stroke" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </Wrapper>
      );
    case 'tx_unfreeze':
      return (
        <Wrapper {...props} viewBox="0 0 512 512" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            className="color-fill"
            d="M412.671051,331.518788 L385.332324,315.703632 C395.289021,305.356483 407.270809,300.393216 407.439567,300.309093 C413.767976,297.785398 417.058748,290.719052 414.949279,284.241568 C413.346082,279.278302 408.705248,275.997498 403.558142,275.997498 C401.954945,275.997498 400.436127,276.333991 398.917309,276.922853 C398.073521,277.259346 378.328885,285.33517 363.562597,303.169281 L282.305825,256.060308 L363.562597,208.951335 C378.328885,226.785446 397.989142,234.86127 398.917309,235.197763 C400.436127,235.786625 401.954945,236.123118 403.558142,236.123118 C408.705248,236.123118 413.346082,232.758191 414.949279,227.879047 C417.058748,221.401564 413.767976,214.335218 407.439567,211.811523 C407.355188,211.7274 395.3734,206.764133 385.332324,196.416983 L412.671051,180.601828 C418.746324,177.068655 420.771415,169.329324 417.311885,163.272456 C415.033657,159.318667 410.814718,156.879096 406.258264,156.879096 C404.064415,156.879096 401.786188,157.467958 399.845476,158.561559 L372.675506,174.376714 C368.878461,160.748761 370.397279,147.96204 370.481658,147.457301 C371.409825,140.643325 367.022128,134.334087 360.356203,132.903993 C359.512416,132.735747 358.668628,132.651624 357.82484,132.651624 C351.833946,132.651624 346.855598,137.026028 345.927431,143.082896 C345.758673,144.008251 342.889795,164.954919 351.074537,186.995189 L270.070901,234.104162 L270.070901,150.653981 C292.768795,146.700192 309.560174,133.661102 310.319583,133.07224 C312.935325,130.96916 314.622901,128.02485 314.876037,124.659923 C315.129174,121.294996 314.116628,118.098316 311.838401,115.574621 C309.391416,112.88268 305.931886,111.28434 302.219219,111.28434 C299.35034,111.28434 296.481462,112.293818 294.203234,114.060404 C294.118856,114.144527 283.909022,121.967982 270.070901,125.501155 L270.070901,93.702598 C270.070901,86.8044984 264.080008,81 256.992189,81 C249.904371,81 243.913477,86.8044984 243.913477,93.702598 L243.913477,125.248785 C230.159735,121.715612 219.949902,113.892158 219.781144,113.808035 C217.502917,112.041448 214.718417,111.03197 211.76516,111.03197 C208.052493,111.03197 204.592963,112.63031 202.145978,115.322252 C199.867751,117.845947 198.770826,121.210873 199.108342,124.491677 C199.361478,127.77248 201.049054,130.716791 203.664796,132.81987 C204.424205,133.408732 221.215584,146.447823 243.913477,150.401612 L243.913477,233.851792 L162.909842,186.742819 C171.010205,164.870796 168.141327,143.755882 167.972569,142.830527 C167.128781,136.773659 162.150433,132.399254 156.159539,132.399254 C155.315751,132.399254 154.471963,132.483377 153.628175,132.651624 C146.962251,133.997594 142.490175,140.475078 143.502721,147.204931 C143.502721,147.373178 145.190297,160.244022 141.308872,174.040221 L114.054524,158.393312 C112.113812,157.299711 109.919964,156.710849 107.641736,156.710849 C103.085282,156.710849 98.8663426,159.150421 96.5881153,163.10421 C93.128585,169.161078 95.1536759,176.984532 101.228949,180.433582 L128.567676,196.248737 C118.695358,206.42764 106.882327,211.47503 106.460433,211.643276 C100.132024,214.166971 96.8412517,221.233317 98.9507213,227.710801 C100.553918,232.674068 105.194752,235.954871 110.341858,235.954871 C111.945055,235.954871 113.463873,235.618379 114.982691,235.029516 C115.826479,234.693024 135.571115,226.6172 150.337403,208.783089 L231.594175,255.892062 L150.337403,303.001034 C135.571115,285.166923 115.910858,277.091099 114.982691,276.754607 C113.463873,276.165745 111.945055,275.829252 110.341858,275.829252 C105.194752,275.829252 100.553918,279.194178 98.9507213,284.073322 C96.8412517,290.550806 100.132024,297.533029 106.460433,300.140847 C106.882327,300.309093 118.695358,305.356483 128.567676,315.535386 L101.228949,331.350541 C95.1536759,334.883714 93.128585,342.623045 96.5881153,348.679913 C98.8663426,352.633702 103.085282,355.073274 107.641736,355.073274 C109.835585,355.073274 112.113812,354.484412 114.054524,353.390811 L141.308872,337.575656 C145.190297,351.455978 143.502721,364.326822 143.502721,364.495069 C142.490175,371.224922 146.962251,377.702406 153.628175,379.048376 C154.471963,379.216623 155.315751,379.300746 156.159539,379.300746 C162.150433,379.300746 167.128781,374.926341 168.056948,368.869473 C168.225705,367.944118 171.094584,346.99745 162.909842,324.957181 L243.913477,277.848208 L243.913477,361.298388 C221.215584,365.252177 204.424205,378.291268 203.664796,378.88013 C201.049054,380.983209 199.361478,383.92752 199.108342,387.292446 C198.855205,390.657373 199.867751,393.854053 202.145978,396.377748 C204.592963,399.06969 208.052493,400.66803 211.76516,400.66803 C214.634038,400.66803 217.502917,399.658552 219.781144,397.891965 C219.865523,397.807842 230.159735,389.984388 243.913477,386.451215 L243.913477,417.997402 C243.913477,424.895502 249.904371,430.7 256.992189,430.7 C264.080008,430.7 270.070901,424.895502 270.070901,417.997402 L270.070901,386.451215 C283.824644,389.984388 294.034477,397.807842 294.203234,397.891965 C296.481462,399.658552 299.35034,400.66803 302.219219,400.66803 C305.931886,400.66803 309.391416,399.06969 311.838401,396.377748 C314.116628,393.854053 315.213552,390.489127 314.876037,387.208323 C314.622901,383.92752 312.935325,380.983209 310.319583,378.88013 C309.560174,378.291268 292.768795,365.252177 270.070901,361.298388 L270.070901,277.848208 L351.074537,324.957181 C342.974173,346.829204 345.843052,367.944118 346.01181,368.869473 C346.855598,374.926341 351.833946,379.300746 357.82484,379.300746 C358.668628,379.300746 359.512416,379.216623 360.356203,379.048376 C367.022128,377.702406 371.409825,371.309045 370.481658,364.495069 C370.397279,364.074453 368.878461,351.287732 372.675506,337.575656 L399.845476,353.390811 C401.786188,354.484412 403.980036,355.073274 406.258264,355.073274 C410.814718,355.073274 415.033657,352.633702 417.311885,348.679913 C420.771415,342.875415 418.746324,335.051961 412.671051,331.518788 Z"
          ></path>
        </Wrapper>
      );
    case 'tx_origination':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </g>
        </Wrapper>
      );
    case 'tx_payout':
      return (
        <Wrapper {...props} viewBox="0 0 512 512" stroke="none" strokeWidth="36" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke" transform="translate(140.000000, 140.000000)">
            <path d="M219,15 L15,219" />
            <circle cx="36.5" cy="36.5" r="36.5" />
            <circle cx="196.5" cy="196.5" r="36.5" />
          </g>
        </Wrapper>
      );
    case 'tx_ballot':
    case 'tx_proposals':
    case 'tx_yay_vote':
      return (
        <Wrapper {...props} viewBox="0 0 512 512" stroke="none" strokeWidth="36" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <path
            className="color-stroke"
            d="M285.548344,212.499342 L285.548344,154.499718 C285.548344,130.475487 266.063454,111 242.027625,111 L184,241.499154 L184,401 L347.637903,400.99812 C362.105448,401.161597 374.482369,390.646291 376.651715,376.34828 L396.671246,245.849126 C397.948666,237.437082 395.465681,228.888713 389.879961,222.468235 C384.294241,216.047757 376.169385,212.402995 367.657433,212.499342 L285.548344,212.499342 Z M184,401 L140.2,401 C124.073285,401 111,388.056959 111,372.090909 L111,270.909091 C111,254.943041 124.073285,242 140.2,242 L184,242 L184,401 Z"
          />
        </Wrapper>
      );
    case 'tx_nay_vote':
      return (
        <Wrapper {...props} viewBox="0 0 512 512" stroke="none" strokeWidth="36" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <path
            className="color-stroke"
            d="M226.451656,299.500658 L226.451656,357.500282 C226.451656,381.524513 245.936546,401 269.972375,401 L328,270.500846 L328,111 L164.362097,111.00188 C149.894552,110.838403 137.517631,121.353709 135.348285,135.65172 L115.328754,266.150874 C114.051334,274.562918 116.534319,283.111287 122.120039,289.531765 C127.705759,295.952243 135.830615,299.597005 144.342567,299.500658 L226.451656,299.500658 Z M328,111.005333 L366.982,111.005333 C384.085748,110.703999 398.707007,123.206714 401,140.094303 L401,241.905697 C398.707007,258.793286 384.085748,271.296001 366.982,270.994667 L328,270.994667 L328,111.005333 Z"
          />
        </Wrapper>
      );
    case 'tx_pass_vote':
      return (
        <Wrapper {...props} viewBox="0 0 512 512" stroke="none" strokeWidth="2" fill="none" fillRule="nonzero">
          <path
            className="color-fill"
            d="M344.315789,139.097198 C339.302905,139.097198 334.547368,140.213763 330.268126,142.199295 C327.365221,126.449353 313.628126,114.482571 297.157895,114.482571 C291.984,114.482571 287.080926,115.665614 282.695916,117.773928 C279.063411,102.99267 265.785768,92 250,92 C234.214232,92 220.936589,102.993348 217.304084,117.773928 C212.919747,115.666293 208.016,114.482571 202.842105,114.482571 C184.268632,114.482571 169.157895,129.697973 169.157895,148.400097 L169.157895,231.309454 C165.028884,229.487404 160.473432,228.4692 155.684211,228.4692 C137.110737,228.4692 122,243.684602 122,262.386726 L122,332.136082 C122,381.135375 161.589726,421 210.252632,421 L289.747368,421 C338.4096,421 378,381.135375 378,332.136082 L378,173.014724 C378,154.311922 362.889263,139.097198 344.315789,139.097198 Z M357.789474,332.136082 C357.789474,369.914101 327.265516,400.649485 289.747368,400.649485 L210.252632,400.649485 C172.734484,400.649485 142.210526,369.914101 142.210526,332.136082 L142.210526,262.386726 C142.210526,254.905876 148.254821,248.819715 155.684211,248.819715 C163.1136,248.819715 169.157895,254.905876 169.157895,262.386726 L169.157895,316.654767 L189.368421,316.654767 L189.368421,148.400097 C189.368421,140.919247 195.412716,134.833087 202.842105,134.833087 C210.271495,134.833087 216.315789,140.919247 216.315789,148.400097 L216.315789,255.603221 L236.526316,255.603221 L236.526316,125.917526 C236.526316,118.436676 242.570611,112.350515 250,112.350515 C257.429389,112.350515 263.473684,118.436676 263.473684,125.917526 L263.473684,255.603221 L283.684211,255.603221 L283.684211,148.400097 C283.684211,140.919247 289.728505,134.833087 297.157895,134.833087 C304.587284,134.833087 310.631579,140.919247 310.631579,148.400097 L310.631579,255.603221 L330.842105,255.603221 L330.842105,173.014045 C330.842105,165.533196 336.8864,159.447035 344.315789,159.447035 C351.745179,159.447035 357.789474,165.533196 357.789474,173.014045 L357.789474,332.136082 Z"
          />
        </Wrapper>
      );
    case 'tx_transaction_send':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <line x1="17" y1="17" x2="7" y2="7" />
            <polyline points="7 17 7 7 17 7" />
          </g>
        </Wrapper>
      );
    case 'tx_transaction':
    case 'tx_transaction_block':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <polyline points="15 10 20 15 15 20" />
            <path d="M4 4v7a4 4 0 0 0 4 4h12" />
          </g>
        </Wrapper>
      );
    case 'tx_transaction_receive':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <line x1="7" y1="7" x2="17" y2="17" />
            <polyline points="17 7 17 17 7 17" />
          </g>
        </Wrapper>
      );
    case 'tx_batch_operation':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </g>
        </Wrapper>
      );
    case 'tx_delegation_send':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <polyline points="17 11 19 13 23 9" />
          </g>
        </Wrapper>
      );

    case 'tx_delegation':
    case 'tx_delegation_receive':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="20" y1="8" x2="20" y2="14" />
            <line x1="23" y1="11" x2="17" y2="11" />
          </g>
        </Wrapper>
      );
    case 'tx_undelegate_send':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="18" y1="8" x2="23" y2="13" />
            <line x1="23" y1="8" x2="18" y2="13" />
          </g>
        </Wrapper>
      );
    case 'tx_undelegate_receive':
    case 'tx_undelegation':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="23" y1="11" x2="17" y2="11" />
          </g>
        </Wrapper>
      );
    case 'tx_double_baking_evidence_send':
    case 'tx_double_endorsement_evidence_send':
      return (
        <Wrapper {...props} viewBox="0 0 512 512" stroke="none" strokeWidth="34" fill="none" fillRule="nonzero">
          <g className="color-stroke" transform="translate(68.000000, 81.000000)">
            <path d="M187.5,141 C174.552765,141 164,151.552937 164,164.5 C164,177.446729 174.553271,188 187.5,188 C200.446729,188 211,177.446729 211,164.5 C211,151.552937 200.447235,141 187.5,141 Z" />
            <path d="M271.051345,319.022954 L214.978407,221.761413 C206.551278,225.789574 197.326377,227.901032 188.000157,227.901032 C178.673527,227.901032 169.44772,225.78907 161.02186,221.761494 L104.949481,319.022067 C130.395964,332.759751 159.000325,340 188.000999,340 C217.00339,340 245.608668,332.759291 271.051329,319.022928 Z" />
            <path d="M339.744796,74.3104249 C325.226662,49.751203 304.819289,28.9764211 280.532831,13.9750414 L223.826669,111.98054 C239.179027,122.557024 249.127003,139.4913 250.846241,158 L363.921592,158 C363.039184,128.482131 354.72397,99.6507692 339.744796,74.3104249 Z M339.744796,74.3104249 C339.744776,74.3103911 339.744756,74.3103573 339.744736,74.3103235 L339.744856,74.3105264 C339.744836,74.3104926 339.744816,74.3104588 339.744796,74.3104249 Z" />
            <path d="M152.17283,111.979854 L95.466887,13.9750294 C71.1803745,28.9752169 50.7740447,49.7491786 36.2541229,74.3105486 C21.2748128,99.6491999 12.9598993,128.481093 12.0782658,158 L125.153593,158 C126.873961,139.489393 136.821574,122.555058 152.17283,111.979854 Z M99.9430599,11.3013564 C99.9433931,11.301164 99.9437263,11.3009716 99.9440595,11.3007792 C99.9437263,11.3009716 99.9433931,11.3011639 99.9430599,11.3013563 Z" />
          </g>
        </Wrapper>
      );

    case 'tx_double_baking_evidence':
    case 'tx_double_baking_evidence_receive':
    case 'tx_double_endorsement_evidence':
    case 'tx_double_endorsement_evidence_receive':
      return (
        <Wrapper {...props} viewBox="0 0 512 512" stroke="none" strokeWidth="1" fill="none" fillRule="nonzero">
          <g className="color-fill" transform="translate(76.000000, 86.000000)">
            <path d="M180,123 C161.252126,123 146,138.252931 146,157 C146,175.747069 161.252931,191 180,191 C198.747069,191 214,175.747069 214,157 C214,138.252931 198.747874,123 180,123 Z" />
            <path d="M272.131902,303.05356 L213.408153,201.239677 C212.546777,199.746336 211.126757,198.658653 209.461322,198.216631 C207.795886,197.774608 206.024696,198.016226 204.536864,198.885725 C197.063799,203.25989 188.579201,205.571822 180.000151,205.571822 C171.421907,205.571822 162.93731,203.25989 155.463437,198.885725 C153.976412,198.016226 152.206029,197.7738 150.538979,198.216631 C148.873544,198.657845 147.453524,199.746336 146.592148,201.239677 L87.8683986,303.05356 C86.0818701,306.150142 87.1402248,310.108951 90.2321381,311.900476 C117.454699,327.666218 148.496541,336 180.000958,336 C211.506182,336 242.548023,327.666218 269.769777,311.900476 C272.860076,310.108951 273.917624,306.150142 272.131902,303.05356 Z" />
            <path d="M334.3243,64.9943552 C318.664195,38.4717463 296.276767,16.2971456 269.583754,0.86585332 C268.101925,0.00958568374 266.341098,-0.222554417 264.690423,0.218431449 C263.038141,0.660220567 261.628675,1.73979252 260.773186,3.22018769 L201.86347,105.155396 C201.006374,106.638201 200.776421,108.399734 201.222658,110.052829 C201.669699,111.705924 202.755944,113.113223 204.242597,113.963868 C219.179878,122.511282 228.555679,138.471115 228.707641,155.618155 C228.739802,159.152468 231.615016,162 235.153554,162 L352.554086,162 C356.11353,162 359,159.117125 359,155.560321 C358.999196,123.651098 350.466019,92.3338723 334.3243,64.9943552 Z" />
            <path d="M157.135938,105.15453 L98.2264438,3.22001421 C97.3709585,1.73961742 95.9614981,0.660847542 94.3092214,0.218254687 C92.6577487,-0.22273166 90.8961242,0.0102119479 89.4167134,0.865677266 C62.7229971,16.2953799 40.3364566,38.4700048 24.674803,64.9942492 C8.53234089,92.332993 0,123.651056 0,155.560314 C0,159.116319 2.88565506,162 6.44588927,162 L123.845979,162 C127.384505,162 130.259707,159.150859 130.291869,155.618148 C130.444634,138.471089 139.819596,122.509632 154.757624,113.963012 C156.244271,113.112366 157.331317,111.705065 157.777552,110.051969 C158.223787,108.398873 157.993031,106.637337 157.135938,105.15453 Z" />
          </g>
        </Wrapper>
      );

    case 'tx_seed_nonce_revelation':
    case 'tx_seed_nonce_revelation_send':
    case 'tx_seed_nonce_revelation_receive':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 9.9-1" />
          </g>
        </Wrapper>
      );
    case 'tx_delegator_contract':
      return (
        <Wrapper {...props} viewBox="0 0 512 512" stroke="none" strokeWidth="36" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke" transform="translate(127.000000, 93.000000)">
            <path d="M146.25,0 L32.5,0 C14.5507456,0 0,14.5507456 0,32.5 L0,292.5 C0,310.449254 14.5507456,325 32.5,325 L227.5,325 C245.449254,325 260,310.449254 260,292.5 L260,113.75 L146.25,0 Z" />
            <polyline points="145 0 145 114 257 114" />
          </g>
        </Wrapper>
      );
    case 'tx_smart_contract':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </g>
        </Wrapper>
      );
    case 'operation':
    case 'tx_contract_call':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </g>
        </Wrapper>
      );

    case '>>':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline className="color-fill" points="9 18 15 12 9 6" />
        </Wrapper>
      );

    case '>':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline className="color-stroke" points="9 18 15 12 9 6" />
        </Wrapper>
      );
    case '<<':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline className="color-fill" points="15 18 9 12 15 6" />
        </Wrapper>
      );
    case '<':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline className="color-stroke" points="15 18 9 12 15 6" />
        </Wrapper>
      );
    case 'menu':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </g>
        </Wrapper>
      );
    case 'move':
      return (
        <Wrapper {...props} className="drag" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <polyline points="5 9 2 12 5 15" />
            <polyline points="9 5 12 2 15 5" />
            <polyline points="15 19 12 22 9 19" />
            <polyline points="19 9 22 12 19 15" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="12" y1="2" x2="12" y2="22" />
          </g>
        </Wrapper>
      );
    case 'refresh':
    case 'tx_set_baker_active':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </g>
        </Wrapper>
      );
    case 'search':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </g>
        </Wrapper>
      );
    case 'copy':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </g>
        </Wrapper>
      );
    case 'moon':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="color-stroke" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </Wrapper>
      );
    case 'activity':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline className="color-stroke" points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </Wrapper>
      );
    case 'home':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </g>
        </Wrapper>
      );
    case 'info':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </g>
        </Wrapper>
      );
    case 'governance':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </g>
        </Wrapper>
      );
    case 'markets':
      return (
        <Wrapper {...props} viewBox="0 0 512 512">
          <path
            className="color-fill"
            d="m76 240c12.101562 0 23.054688-4.855469 31.148438-12.652344l44.402343 22.199219c-.222656 1.808594-.550781 3.585937-.550781 5.453125 0 24.8125 20.1875 45 45 45s45-20.1875 45-45c0-6.925781-1.703125-13.410156-4.511719-19.277344l60.234375-60.234375c5.867188 2.808594 12.351563 4.511719 19.277344 4.511719 24.8125 0 45-20.1875 45-45 0-4.671875-.917969-9.089844-2.246094-13.328125l52.335938-39.242187c7.140625 4.769531 15.699218 7.570312 24.910156 7.570312 24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45c0 4.671875.917969 9.089844 2.246094 13.328125l-52.335938 39.242187c-7.140625-4.769531-15.699218-7.570312-24.910156-7.570312-24.8125 0-45 20.1875-45 45 0 6.925781 1.703125 13.410156 4.511719 19.277344l-60.234375 60.234375c-5.867188-2.808594-12.351563-4.511719-19.277344-4.511719-12.101562 0-23.054688 4.855469-31.148438 12.652344l-44.402343-22.199219c.222656-1.808594.550781-3.585937.550781-5.453125 0-24.8125-20.1875-45-45-45s-45 20.1875-45 45 20.1875 45 45 45zm0 0"
          />
          <path
            className="color-fill"
            d="m497 482h-16v-317c0-8.289062-6.710938-15-15-15h-60c-8.289062 0-15 6.710938-15 15v317h-30v-227c0-8.289062-6.710938-15-15-15h-60c-8.289062 0-15 6.710938-15 15v227h-30v-107c0-8.289062-6.710938-15-15-15h-60c-8.289062 0-15 6.710938-15 15v107h-30v-167c0-8.289062-6.710938-15-15-15h-60c-8.289062 0-15 6.710938-15 15v167h-16c-8.289062 0-15 6.710938-15 15s6.710938 15 15 15h482c8.289062 0 15-6.710938 15-15s-6.710938-15-15-15zm0 0"
          />
        </Wrapper>
      );
    case 'statistics':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
            <path d="M22 12A10 10 0 0 0 12 2v10z" />
          </g>
        </Wrapper>
      );
    case 'bookmarks':
    case 'bookmarks-inactive':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon className="color-stroke" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </Wrapper>
      );
    case 'bookmarks-active':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" {...props} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon
            className="color-fill color-stroke"
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          />
        </Wrapper>
      );
    case 'anchor':
    case 'protocol':
    case 'protocols':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <circle cx="12" cy="5" r="3" />
            <line x1="12" y1="22" x2="12" y2="8" />
            <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
          </g>
        </Wrapper>
      );
    case 'user':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <g className="color-stroke">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </g>
        </Wrapper>
      );
    case 'edit':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </g>
        </Wrapper>
      );
    case '+':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </g>
        </Wrapper>
      );
    case '-':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <circle cx="12" cy="12" r="10" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </g>
        </Wrapper>
      );
    case 'up':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline className="color-stroke" points="18 15 12 9 6 15" />
        </Wrapper>
      );
    case '2up':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <polyline points="17 11 12 6 7 11" />
            <polyline points="17 18 12 13 7 18" />
          </g>
        </Wrapper>
      );
    case 'down':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline className="color-stroke" points="6 9 12 15 18 9" />
        </Wrapper>
      );
    case '2down':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <polyline points="7 13 12 18 17 13" />
            <polyline points="7 6 12 11 17 6" />
          </g>
        </Wrapper>
      );
    case '=':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <rect x="4" y="15" width="16" height="1" />
            <rect x="4" y="10" width="16" height="1" />
          </g>
        </Wrapper>
      );
    case 'logo':
      return (
        <Wrapper {...props} viewBox="0 0 32 32">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
              className="color-fill"
              d="M4,10.5 L-1.0658141e-14,10.5 L-1.0658141e-14,9 L4,9 L4,0 L6.21582734,0 L6.43624947,17.0645793 C6.47159033,19.8005879 8.69959555,22 11.4358324,22 L14,22 L14,23.5 L11,23.5 C7.13400675,23.5 4,20.3659932 4,16.5 L4,10.5 Z M9,9 L18,9 L16,15 L16.1763426,15 C20.8171239,15 24,18.5 24,23.5 C24,28.5 20.5,32 15.5,32 L12.5,32 C9.19423804,32 5.5,29.5 5.5,26 L7.5,26 C7.5,28 9.95710619,30.5 12.5,30.5 L15.5,30.5 C19.3779131,30.5 22,27.5 22,23.5 C22,19.5 18.8733898,16.5 15,16.5 L13.5,16.5 L15.5,10.5 L9,10.5 L9,9 Z"
            />
          </g>
        </Wrapper>
      );
    case 'tx_seed_slash':
    case 'alert-circle':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </g>
        </Wrapper>
      );
    case 'alert-triangle':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </g>
        </Wrapper>
      );
    case 'rights-pending':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon className="color-stroke" points="12 2 19 21 12 17 5 21 12 2"></polygon>
        </Wrapper>
      );
    case 'rights-frozen':
      return (
        <Wrapper {...props} viewBox="0 0 24 26" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            className="color-fill"
            d="M23.5315794,18.551617 L21.5070702,17.3804605 C22.2443915,16.6142251 23.1316764,16.2466814 23.1441734,16.2404518 C23.6128097,16.0535651 23.8565007,15.5302824 23.7002885,15.0506067 C23.5815673,14.6830629 23.2379006,14.4401102 22.856743,14.4401102 C22.7380218,14.4401102 22.6255491,14.4650284 22.5130764,14.5086353 C22.4505915,14.5335535 20.988446,15.1315909 19.8949611,16.4522567 L13.8776698,12.9637055 L19.8949611,9.47515427 C20.988446,10.7958201 22.444343,11.3938574 22.5130764,11.4187757 C22.6255491,11.4623825 22.7380218,11.4873008 22.856743,11.4873008 C23.2379006,11.4873008 23.5815673,11.2381185 23.7002885,10.8768043 C23.8565007,10.3971285 23.6128097,9.87384584 23.1441734,9.68695916 C23.1379249,9.68072961 22.25064,9.31318582 21.5070702,8.54695047 L23.5315794,7.37579399 C23.9814704,7.11415265 24.131434,6.54103352 23.8752461,6.09250551 C23.706537,5.79971639 23.3941128,5.61905927 23.0566946,5.61905927 C22.8942339,5.61905927 22.7255248,5.66266616 22.5818097,5.74365039 L20.5697975,6.91480686 C20.2886156,5.90561883 20.4010884,4.95872636 20.4073368,4.92134903 C20.4760702,4.41675501 20.1511489,3.94953833 19.6575186,3.84363589 C19.5950338,3.83117678 19.5325489,3.82494722 19.4700641,3.82494722 C19.0264216,3.82494722 18.657761,4.14888412 18.5890276,4.59741213 C18.5765307,4.66593724 18.3640822,6.21709662 18.9701852,7.84924022 L12.9716394,11.3377914 L12.9716394,5.15807215 C14.652482,4.86528303 15.8959305,3.89970189 15.9521669,3.856095 C16.1458699,3.70035611 16.2708396,3.48232165 16.2895851,3.23313943 C16.3083305,2.9839572 16.2333487,2.74723408 16.0646396,2.56034741 C15.8834336,2.36100162 15.6272457,2.24264006 15.3523123,2.24264006 C15.1398638,2.24264006 14.9274153,2.31739473 14.7587062,2.4482154 C14.7524577,2.45444496 13.996391,3.03379364 12.9716394,3.29543498 L12.9716394,0.940662916 C12.9716394,0.429839346 12.527997,0 12.0031242,0 C11.4782515,0 11.034609,0.429839346 11.034609,0.940662916 L11.034609,3.27674632 C10.0161059,3.01510497 9.26003924,2.43575629 9.24754227,2.42952674 C9.07883317,2.29870607 8.87263316,2.2239514 8.65393617,2.2239514 C8.37900283,2.2239514 8.12281493,2.34231296 7.94160886,2.54165874 C7.77289976,2.72854541 7.69166945,2.97772764 7.71666339,3.22068031 C7.73540885,3.46363299 7.86037855,3.68166744 8.0540816,3.83740633 C8.11031796,3.88101322 9.35376652,4.84659436 11.034609,5.13938348 L11.034609,11.3191028 L5.03606324,7.83055156 C5.63591782,6.21086707 5.42346933,4.64724858 5.41097236,4.57872346 C5.3484875,4.13019545 4.97982688,3.80625855 4.53618443,3.80625855 C4.47369957,3.80625855 4.41121472,3.81248811 4.34872987,3.82494722 C3.85509954,3.92462011 3.52392982,4.4042959 3.59891165,4.90266036 C3.59891165,4.91511947 3.72388135,5.8682415 3.43645103,6.88988864 L1.41819031,5.73119127 C1.27447515,5.65020705 1.11201454,5.60660016 0.943305436,5.60660016 C0.605887235,5.60660016 0.293462975,5.78725728 0.124753875,6.0800464 C-0.131434018,6.52857441 0.0185296264,7.10792309 0.468420561,7.36333488 L2.49292977,8.53449135 C1.761857,9.2882676 0.887069069,9.66204094 0.855826643,9.67450005 C0.387190253,9.86138672 0.14349933,10.3846694 0.29971146,10.8643452 C0.418432679,11.231889 0.762099365,11.4748417 1.14325696,11.4748417 C1.26197818,11.4748417 1.37445092,11.4499234 1.48692365,11.4063165 C1.5494085,11.3813983 3.01155404,10.783361 4.10503895,9.46269516 L10.1223302,12.9512464 L4.10503895,16.4397976 C3.01155404,15.1191318 1.55565699,14.5210944 1.48692365,14.4961762 C1.37445092,14.4525693 1.26197818,14.4276511 1.14325696,14.4276511 C0.762099365,14.4276511 0.418432679,14.6768333 0.29971146,15.0381475 C0.14349933,15.5178233 0.387190253,16.0348765 0.855826643,16.2279927 C0.887069069,16.2404518 1.761857,16.6142251 2.49292977,17.3680014 L0.468420561,18.5391579 C0.0185296264,18.8007992 -0.131434018,19.3739183 0.124753875,19.8224463 C0.293462975,20.1152355 0.605887235,20.2958926 0.943305436,20.2958926 C1.10576605,20.2958926 1.27447515,20.2522857 1.41819031,20.1713015 L3.43645103,19.000145 C3.72388135,20.0280217 3.59891165,20.9811437 3.59891165,20.9936028 C3.52392982,21.4919673 3.85509954,21.9716431 4.34872987,22.071316 C4.41121472,22.0837751 4.47369957,22.0900046 4.53618443,22.0900046 C4.97982688,22.0900046 5.3484875,21.7660677 5.41722084,21.3175397 C5.42971781,21.2490146 5.64216631,19.6978552 5.03606324,18.0657116 L11.034609,14.5771604 L11.034609,20.7568797 C9.35376652,21.0496688 8.11031796,22.01525 8.0540816,22.0588568 C7.86037855,22.2145957 7.73540885,22.4326302 7.71666339,22.6818124 C7.69791794,22.9309947 7.77289976,23.1677178 7.94160886,23.3546044 C8.12281493,23.5539502 8.37900283,23.6723118 8.65393617,23.6723118 C8.86638467,23.6723118 9.07883317,23.5975571 9.24754227,23.4667364 C9.25379075,23.4605069 10.0161059,22.8811582 11.034609,22.6195169 L11.034609,24.9556003 C11.034609,25.4664238 11.4782515,25.8962632 12.0031242,25.8962632 C12.527997,25.8962632 12.9716394,25.4664238 12.9716394,24.9556003 L12.9716394,22.6195169 C13.9901425,22.8811582 14.7462092,23.4605069 14.7587062,23.4667364 C14.9274153,23.5975571 15.1398638,23.6723118 15.3523123,23.6723118 C15.6272457,23.6723118 15.8834336,23.5539502 16.0646396,23.3546044 C16.2333487,23.1677178 16.314579,22.9185355 16.2895851,22.6755829 C16.2708396,22.4326302 16.1458699,22.2145957 15.9521669,22.0588568 C15.8959305,22.01525 14.652482,21.0496688 12.9716394,20.7568797 L12.9716394,14.5771604 L18.9701852,18.0657116 C18.3703307,19.6853961 18.5827792,21.2490146 18.5952761,21.3175397 C18.657761,21.7660677 19.0264216,22.0900046 19.4700641,22.0900046 C19.5325489,22.0900046 19.5950338,22.0837751 19.6575186,22.071316 C20.1511489,21.9716431 20.4760702,21.4981968 20.4073368,20.9936028 C20.4010884,20.962455 20.2886156,20.0155626 20.5697975,19.000145 L22.5818097,20.1713015 C22.7255248,20.2522857 22.8879855,20.2958926 23.0566946,20.2958926 C23.3941128,20.2958926 23.706537,20.1152355 23.8752461,19.8224463 C24.131434,19.392607 23.9814704,18.8132583 23.5315794,18.551617 Z"
          />
        </Wrapper>
      );
    case 'rights-complete':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </g>
        </Wrapper>
      );
    case 'zap':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon className="color-stroke" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </Wrapper>
      );
    case 'zap-off':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <polyline points="12.41 6.75 13 2 10.57 4.92" />
            <polyline points="18.57 12.91 21 10 15.66 10" />
            <polyline points="8 8 3 14 12 14 11 22 16 16" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </g>
        </Wrapper>
      );
    case 'clock':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </g>
        </Wrapper>
      );
    case 'clock-off':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" stroke="none" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke" transform="translate(1.000000, 1.000000)">
            <path d="M3.90799259,3.94993359 C2.1106578,5.75789383 1,8.2492429 1,11 C1,16.5228475 5.4771525,21 11,21 C13.7733382,21 16.2829919,19.8710325 18.0944529,18.0476056 M19.9697966,15.4257563 C20.6293534,14.0915643 21,12.5890667 21,11 C21,5.4771525 16.5228475,1 11,1 C9.79979821,1 8.64898056,1.21143862 7.58276404,1.59909888 C7.19676037,1.739444 6.82184508,1.90288588 6.45968923,2.08775349" />
            <path d="M11,5 L11,6.87451172 M15.0106201,11 L15.8709717,11" />
            <path d="M0,0 L22,22" />
          </g>
        </Wrapper>
      );
    case 'minus':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line className="color-stroke" x1="5" y1="12" x2="19" y2="12" />
        </Wrapper>
      );
    case 'plus':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </g>
        </Wrapper>
      );
    case 'x':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </g>
        </Wrapper>
      );
    case 'qrcode':
      return (
        <Wrapper {...props} viewBox="0 0 512 512">
          <g className="color-fill">
            <path d="M225,0H15C6.709,0,0,6.709,0,15v210c0,8.291,6.709,15,15,15h210c8.291,0,15-6.709,15-15V15C240,6.709,233.291,0,225,0z M210,210H30V30h180V210z" />
            <path d="M497,0H287c-8.291,0-15,6.709-15,15v210c0,8.291,6.709,15,15,15h210c8.291,0,15-6.709,15-15V15C512,6.709,505.291,0,497,0z M482,210H302V30h180V210z" />
            <path d="M437,60h-90c-8.291,0-15,6.709-15,15v90c0,8.291,6.709,15,15,15h90c8.291,0,15-6.709,15-15V75 C452,66.709,445.291,60,437,60z" />
            <path d="M165,60H75c-8.291,0-15,6.709-15,15v90c0,8.291,6.709,15,15,15h90c8.291,0,15-6.709,15-15V75 C180,66.709,173.291,60,165,60z" />
            <path d="M165,332H75c-8.291,0-15,6.709-15,15v90c0,8.291,6.709,15,15,15h90c8.291,0,15-6.709,15-15v-90 C180,338.709,173.291,332,165,332z" />
            <path d="M225,272H15c-8.291,0-15,6.709-15,15v210c0,8.291,6.709,15,15,15h210c8.291,0,15-6.709,15-15V287 C240,278.709,233.291,272,225,272z M210,482H30V302h180V482z" />
            <path d="M497,362c-8.291,0-15,6.709-15,15v45h-75c-8.291,0-15,6.709-15,15v45h-90v-45c0-8.291-6.709-15-15-15 c-8.291,0-15,6.709-15,15v60c0,8.291,6.709,15,15,15h120c8.291,0,15-6.709,15-15v-45h75c8.291,0,15-6.709,15-15v-60 C512,368.709,505.291,362,497,362z" />
            <path d="M377,272h-90c-8.291,0-15,6.709-15,15v90c0,8.291,6.709,15,15,15c8.291,0,15-6.709,15-15v-75h60v15 c0,8.291,6.709,15,15,15c8.291,0,15-6.709,15-15v-30C392,278.709,385.291,272,377,272z" />
            <path d="M497,272h-60c-8.291,0-15,6.709-15,15v75h-75c-8.291,0-15,6.709-15,15v60c0,8.291,6.709,15,15,15c8.291,0,15-6.709,15-15 v-45h75c8.291,0,15-6.709,15-15v-75h45c8.291,0,15-6.709,15-15C512,278.709,505.291,272,497,272z" />
            <path d="M497,482h-30c-8.291,0-15,6.709-15,15c0,8.291,6.709,15,15,15h30c8.291,0,15-6.709,15-15C512,488.709,505.291,482,497,482z" />
          </g>
        </Wrapper>
      );
    case 'settings':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </g>
        </Wrapper>
      );
    case 'link':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </g>
        </Wrapper>
      );

    case 'token':
      return (
        <Wrapper {...props} viewBox="0 0 296.473 296.473" fill="none">
          <path
            className="color-fill"
            d="M148.237,0C66.368,0,0.001,66.367,0.001,148.236s66.367,148.236,148.236,148.236c81.867,0,148.234-66.367,148.234-148.236
    S230.104,0,148.237,0z M196.489,202.12c-15.776,5.042-30.059,0.176-39.122-9.254c0.711,13.167,2.653,29.335,7.702,38.37h-33.666
    c5.049-9.035,6.991-25.202,7.702-38.369c-9.063,9.43-23.347,14.295-39.121,9.253c-27.906-8.921-57.13-68.825,48.253-136.071
    C253.619,133.295,224.395,193.199,196.489,202.12z"
          />
        </Wrapper>
      );

    case 'mint':
      return (
        <Wrapper {...props} viewBox="0 0 512 512" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px">
          <g className="color-stroke">
            <path d="M321.89,171.42C233,114,141,155.22,56,65.22c-19.8-21-8.3,235.5,98.1,332.7C231.89,468.92,352,461,392.5,392S410.78,228.83,321.89,171.42Z" />
            <path d="M173,253c86,81,175,129,292,147" />
          </g>
        </Wrapper>
      );

    case 'burn':
      return (
        <Wrapper {...props} viewBox="0 0 512 512" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px">
          <path
            className="color-fill"
            d="M394.23,197.56a300.43,300.43,0,0,0-53.37-90C301.2,61.65,249.05,32,208,32a16,16,0,0,0-15.48,20c13.87,53-14.88,97.07-45.31,143.72C122,234.36,96,274.27,96,320c0,88.22,71.78,160,160,160s160-71.78,160-160C416,276.7,408.68,235.51,394.23,197.56ZM288.33,418.69C278,429.69,265.05,432,256,432s-22-2.31-32.33-13.31S208,390.24,208,368c0-25.14,8.82-44.28,17.34-62.78,4.95-10.74,10-21.67,13-33.37a8,8,0,0,1,12.49-4.51A126.48,126.48,0,0,1,275,292c18.17,24,29,52.42,29,76C304,390.24,298.58,407.77,288.33,418.69Z"
          />
        </Wrapper>
      );

    case 'pin':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </g>
        </Wrapper>
      );

    case 'rights-active':
    case 'cycle':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </g>
        </Wrapper>
      );

    case 'code':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </g>
        </Wrapper>
      );

    case 'box':
    case 'block':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </g>
        </Wrapper>
      );

    case 'account':
    case 'wallet':
      return (
        <Wrapper {...props} viewBox="0 0 512 512" fill="none" strokeWidth="38" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <rect x="48" y="144" width="416" height="288" rx="48" ry="48" />
            <path d="M411.36,144V114A50,50,0,0,0,352,64.9L88.64,109.85A50,50,0,0,0,48,159v49" />
            <path d="M368,320a32,32,0,1,1,32-32A32,32,0,0,1,368,320Z" />
          </g>
        </Wrapper>
      );
    case 'meh':
      return (
        <Wrapper {...props} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke">
            <circle cx="12" cy="12" r="10" />
            <line x1="8" y1="15" x2="16" y2="15" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </g>
        </Wrapper>
      );

    case 'whale':
      return (
        <Wrapper {...props} viewBox="0 0 24 16" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <g className="color-stroke" transform="translate(0.000000, -4.000000)">
            <g transform="translate(12.000000, 12.000000) scale(-1, -1) translate(-12.000000, -12.000000) translate(1.000000, 5.000000)">
              <path
                d="M15.1619817,5.62647245 C13.7535459,1.44343219 10.016508,-0.511737596 6.1993081,0.114619393 C4.98611659,0.313689657 3.88751992,0.786787565 2.96374174,1.45895227 C2.67097624,1.67197595 2.39576943,1.9049938 2.14003829,2.1556197 C0.663783219,3.60240382 -0.163466548,5.63595648 0.0270601637,7.79726528 C0.354733744,11.5143493 3.18857236,9.23828175 8.27076343,8.92353523 C11.6588908,8.71370423 14.6120211,9.25755641 17.1301542,10.5550918 C18.4532596,10.5550918 16.4906175,11.7640064 17.1301542,14 C18.4532596,12.9022202 18.273019,11.8248968 18.7256994,11.2973854 C19.1668187,10.7833462 20.8230069,11.2973854 22,9.96305294 C20.7398725,9.59362187 19.4190424,9.79096815 18.0375097,10.5550918 C17.0594482,10.0580391 16.1009389,8.41516596 15.1619817,5.62647245 Z"
                strokeWidth="2"
              />
              <circle cx="6.5" cy="5.5" r="1" />
              <path d="M1,3.22094973 C2.47862261,2.93807048 3.61163856,3.03108724 4.39904785,3.5" />
            </g>
          </g>
        </Wrapper>
      );

    case 'tx_null':
    case 'null':
      return <></>;
    default:
      return <TextWrapper {...props}>{type}</TextWrapper>;
  }
};
const TextWrapper = styled.div`
  ${layout}
  ${space}
  ${position}
  ${props => {
    props.variant = props.variant || 'label';
    return '';
  }}
  text-align: center;
  font-size: ${props => (props.fsize ? fontSizes[props.fsize] || fontSizes.md : fontSizes.md)};
`;

const Wrapper = styled.svg`
  ${layout}
  ${space}
  ${position}
  ${props => {
    props.variant = props.variant || 'label';
    return '';
  }}
  width: ${props => (props.fsize ? fontSizes[props.fsize] || fontSizes.md : fontSizes.md)};
  height: ${props => (props.fsize ? fontSizes[props.fsize] || fontSizes.md : fontSizes.md)};

  .color-fill{
    fill: ${props => (props.variant === 'inherit' ? 'currentColor' : 'var(--' + props.variant + '-color)')};
  }
  .color-stroke{
    stroke:  ${props => (props.variant === 'inherit' ? 'currentColor' : 'var(--' + props.variant + '-color)')};
  }
`;

export default Icons;