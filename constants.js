/*
   Note that COINBASE_PREORDER_DATA_CODE is the button code from
   coinbase.com/merchant_tools, used for the Preorder Button.  This is
   different from the COINBASE_API key in .env file, which is from
   coinbase.com/account/integrations

   The button code can be shown publicly, while the API key should only be
   included in a .env file and never shown publicly.  The former allows
   people to send you money, the latter allows people to send money from
   your account.

   For FUNDING_UNIT_SYMBOL, we use mBTC to represent 1/1000 of a Bitcoin and
   FUNDING_SI_SCALE for the corresponding multiplier.

   Note that for FUNDING_UNIT_SYMBOL, in theory we could use the Thai Baht
   symbol, but then we'd have to change the font.  If you use another
   payment backend, you can substitute "$" for the dollar or use one of the
   other currency symbols.

    - https://en.bitcoin.it/wiki/Bitcoin_symbol#Existing_Unicode_symbol
    - http://webdesign.about.com/od/localization/l/blhtmlcodes-cur.htm#codes
*/
var Constants = {
  APP_NAME: "TellMeCicero", 
  FUNDING_TARGET: 2000.00,
  FUNDING_UNIT_SYMBOL: "BTC",
  FUNDING_SI_SCALE: 1,
  FUNDING_END_DATE: new Date("December 13, 2013"),
  PRODUCT_NAME: "Tell Me Cicero",
  PRODUCT_SHORT_DESCRIPTION: "Live your travel to get the best of the place you're in",
  TWITTER_USERNAME: "TellMeCicero",
  TWITTER_TWEET: "This project crowdfunder looks interesting.",
  COINBASE_PREORDER_DATA_CODE: "56be80b08e7e302f94f31552c4e60fa9",
  days_left: function() {
      return Math.max(Math.ceil((this.FUNDING_END_DATE - new Date()) / (1000*60*60*24)), 0);
  }
};

module.exports = Constants;
