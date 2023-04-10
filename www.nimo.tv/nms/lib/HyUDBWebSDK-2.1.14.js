/*
 *虎牙帐号WEBSDK
 */
(function (window, document) {
  /*
	Version：1.0-兼容IE6及以上版本浏览
			 1.1-添加了自定义http、https；
				-添加了存取方域名和子域名支持；
		     1.2-添加了微信公众号授权登录；
			 1.3-添加了虎牙帐号登录；
				-添加了requestid参数，int唯一；
				-添加了上报功能;
			 1.5-添加了渠道；
			 1.6-添加了注册模块；
			 1.8-添加了第三方登录内嵌IFrame模式；
			 1.9-添加了移动端支撑；
				-优化了上报功能;
			 2.0-添加了扫码功能；
			 2.1-添加注册国家字段；
	Author：LiuHanlin
	*/
  var HyUDBWebSDK = function () {
    /**
     * @description 全局参数
     */
    this.JSSDK = {
      Global: {
        appid: 0,
        lcid: 2052,
        sdid: "", // 设备信息
        byPass: 2,
        logTest: false, // 测试的
        protocol: 'https',
        domain: 'huya.com',
        domainList: '',
        exchange: '',
        session: 'udb_session',
        bridge: {
          name: 'huya',
          success: function () {}
        },
        domainFunc: {
          login: 'udblgn',
          thrid: 'udb3lgn',
          register: 'udbreg',
          security: 'udbsec',
          api: 'udbapi',
          log: 'udblog',
          html: 'aq'
        },
        loadFunc: {
          login: true,
          thrid: true,
          register: true,
          security: false,
          api: false,
          log: false,
          html: false
        },
        start: function () {},
        success: function () {},
        complete: function () {},
        error: function (response) {}
      },
      Command: {
        '10001': {},
        '10003': {},
        '10009': {},
        '10011': {},
        '10013': {},
        '10015': {},
        '10017': {},
        '10019': {},
        '20005': {},
        '20009': {},
        '20011': {},
        '20013': {},
        '20017': {},
        '20019': {},
        '30001': {},
        '30003': {},
        '30005': {},
        '30007': {},
        '40001': {},
        '40003': {},
        '40005': {},
        '40020': {},
        '40022': {},
        '50001': {},
        '60001': {},
        '60003': {},
        '60005': {},
        '60007': {},
        '60009': {},
        '60011': {},
        '60013': {},
        '60015': {},
        '60017': {},
        '60019': {},
        '60021': {},
        '60023': {},
        '60025': {},
        '60027': {},
        '70001': {},
        '70003': {},
        '70005': {},
        '70007': {},
        '70009': {},
        '70011': {},
        '70013': {}
      },
      Resource: {
        VERSION: '2.1',
        URI: {
          EXH_CAL: '190001',
          EXH_ASC: '190002',
          EXH_LIS: '190003',
          EXH_INT: '190008',
          COR_CAL: '190004',
          COR_LIS: '190005',
          COR_SND: '190006',
          COR_MBL: '190007',
          COR_JNP: '190009',
          COR_PCE: '190010',
          SDK_INF: '310000',
          EVT_RPT: '320000',
          INN_MSG: '330000'
        },
        MURTYPE: {
          '10002': '1',
          '10012': '2',
          '10010': '3',
          '10014': '5',
          '20006': '7',
          '20014': '10',
          '20018': '11',
          '60002': '12',
          '60010': '13',
          '60008': '14',
          '70004': '15',
          '99091': '91',
          '99092': '92'
        },
        EXCEPT: {
          EXH_CAL: {
            PARSE: '190101',
            FORMAT: '190102',
            UNKNOWN: '190103',
            LALPAR: '190110',
            LALFMT: '190111',
            RMTPAR: '190112',
            RMTFMT: '190113'
          },
          EXH_ASC: {
            PARSE: '190104',
            ERROR: '190105',
            FORMAT: '190107',
            NETOFF: '190108'
          },
          EXH_LIS: { ERROR: '190106' },
          EXH_INT: { INITERR: '190109' },
          COR_CAL: {
            PARSE: '190151',
            FORMAT: '190152',
            UNKNOWN: '190153',
            EXCHANGE: '190159'
          },
          COR_LIS: { ERROR: '190154' },
          COR_SND: { NOTFOUND: '190155', NOTINIT: '190158' },
          COR_MBL: { NOTSUPT: '190156' },
          COR_JNP: { TIMEOUT: '190157', LDERROR: '190160' },
          COR_PCE: { NOTSUPT: '190161' },
          SDK_INF: {
            INITSUC: '310101',
            MOBLCHK: '310102',
            MOBLCAL: '310103',
            EXCHSUC: '310104',
            PCECHK: '310105',
            PCECAL: '310106'
          },
          EVT_RPT: { SDKLOG: '320100', PGECLK: '320102' },
          INN_MSG: { UPGSUC: '330100', UPGCAL: '330102' }
        },
        MESSAGE: {
          '2052': {
            EXH_CAL: {
              PARSE: '消息解析错误！',
              FORMAT: '消息格式错误！',
              UNKNOWN: '返回消息不能识别！',
              LALPAR: '本地消息解析错误！',
              LALFMT: '本地消息格式错误！',
              RMTPAR: '远程消息解析错误！',
              RMTFMT: '远程消息格式错误！'
            },
            EXH_ASC: {
              PARSE: '异常命令错误！',
              ERROR: '服务器错误！',
              FORMAT: '命令格式错误！',
              NETOFF: '网络连接不成功！'
            },
            EXH_LIS: { ERROR: '监听事件错误！' },
            EXH_INT: { INITERR: '初始化内部错误、请重新加载！' },
            COR_CAL: {
              PARSE: '内部解析错误！',
              FORMAT: '内部格式错误！',
              UNKNOWN: '内部消息不能识别！',
              EXCHANGE: '内部消息标识错误！'
            },
            COR_LIS: { ERROR: '内部服务错误！' },
            COR_SND: {
              NOTFOUND: '没有找到窗口！',
              NOTINIT: '初始化失败、请重新加载！'
            },
            COR_MBL: { NOTSUPT: '非法移动端！' },
            COR_JNP: { TIMEOUT: '网络超时！', LDERROR: '获取快速登录出错！' },
            COR_PCE: { NOTSUPT: '非法PC端！' },
            SDK_INF: {
              INITSUC: '初始化成功！',
              MOBLCHK: '移动端加载JS桥成功',
              MOBLCAL: '移动端回调成功',
              EXCHSUC: '交换桥初化成功',
              PCECHK: 'PC端加载JS桥成功',
              PCECAL: 'PC端回调成功'
            },
            EVT_RPT: { SDKLOG: 'SDK日志上报！', PGECLK: '页面点击事件！' },
            INN_MSG: { UPGSUC: '升级成功！', UPGCAL: '取消升级！' }
          },
          '1033': {
            EXH_CAL: {
              PARSE: 'Parse Error Messages!',
              FORMAT: 'Format Error Messages!',
              UNKNOWN: 'Unknown Message!',
              LALPAR: 'Local Parse Error Messages!',
              LALFMT: 'Local Format Error Messages!',
              RMTPAR: 'Remote Parse Error Messages!',
              RMTFMT: 'Remote Format Error Messages!'
            },
            EXH_ASC: {
              PARSE: 'Parse Error Commamd!',
              ERROR: 'Server Error!',
              FORMAT: 'Format Error Commamd!',
              NETOFF: 'Network Connection Unsuccessful!'
            },
            EXH_LIS: { ERROR: 'Monitor Event Error!' },
            EXH_INT: { INITERR: 'Init Internal Error,Please reload!' },
            COR_CAL: {
              PARSE: 'Internal Parse Error!',
              FORMAT: 'Internal Format Error!',
              UNKNOWN: 'Unknown Command!',
              EXCHANGE: 'Message ID Error!'
            },
            COR_LIS: { ERROR: 'Internal Error!' },
            COR_SND: {
              NOTFOUND: 'Not Found Window!',
              NOTINIT: 'Init Failure,Please reload!'
            },
            COR_MBL: { NOTSUPT: 'Illegal Mobile!' },
            COR_JNP: {
              TIMEOUT: 'NETWORK TIMEOUT!',
              LDERROR: 'Quick Login Error!'
            },
            COR_PCE: { NOTSUPT: 'Illegal PC!' },
            SDK_INF: {
              INITSUC: 'Init Internal Success!',
              MOBLCHK: 'Mobile Load JSBridge Success!',
              MOBLCAL: 'Mobile Callback Success!',
              EXCHSUC: 'Exchange Init Internal Success!',
              PCECHK: 'PC Load JSBridge Success!',
              PCECAL: 'PC Callback Success!'
            },
            EVT_RPT: { SDKLOG: 'SDK Log Report!', PGECLK: 'Page Click!' },
            INN_MSG: { UPGSUC: 'UpGrade Success！', UPGCAL: 'UpGrade Cancel！' }
          }
        }
      }
    };
    this.Login.init(this);
    this.Register.init(this);
    this.Password.init(this);
    this.Code.init(this);
    this.Strategy.init(this);
    this.Security.init(this);
    this.H5.init(this);
    this.Item.init(this);
    this.Static.init(this);
    this.Gui.init(this);
    this.Util.init(this);
    this.Html.init(this);
    this.Callback.init(this);
    this.Message.init(this);
    this.Mobile.init(this);
    this.PC.init(this);
    this.Cookie.init(this);
    this.Report.init(this);
    this.listen(this.Callback);
  };
  /**
   * @description 初始化方法-页面加载后和其他SDK方法调用前调用
   * @param {number} appid - 接入应用像帐号平台申请的唯一应用标识
   * @param {number} lcid - 语言（2052，1028，1033），国际化使用，缺省中文2052
   * @param {number} byPass - 旁路类型，1-YY，2-HY&YY，3-HY
   * @param {string} protocol - 协议（https、http），缺省https
   * @param {string} domain - 互联主域名（国外：master.tv，国内：huya.com），缺省huya.com
   * @param {string} domainList - 需要额外写登陆态的根域名，使用英文逗号分隔（例如："master.tv,huya.com"）
   * @param {object} domainFunc - 互联子域名（login：udblgn，register：udbreg，thrid：udb3lgn，api：udbapi），缺省不加-test
   * @param {object} loadFunc - 加载功能模块（login：true，register：true，thrid：true，api：false），缺省除api不加载其他功能都加载，可根据自己需要定制，不需要加载的设置false及可，要加载的可不设置
   * @param {*} error - 全局错误回调方法JSON格式：{"uri":"190001","version":"1.0","context":"","returnCode":"190101",message":"Internal Error!","description":"Internal Error!"}
   * @example
   * HyUDBWebSDK.init({
   * 	appid:1000,
   * 	lcid:2052,
   * 	byPass:2,
   * 	domain:'master.tv',
   * 	domainList:'master.tv,huya.com',
   *	domainFunc:{
   *		login:'udblgn',
   *		register:'udbreg',
   *		thrid:'udb3lgn',
   *		security:'udbsec',
   *		api:'udbapi'
   *	},
   *	loadFunc:{
   *		login:true,
   *		register:true,
   *		thrid:true,
   *		security:false,
   *		api:false
   *	},
   *	success:function(){},
   *	complete:function(){},
   * 	error:function(response){
   * });
   */
  HyUDBWebSDK.prototype.init = function (options) {
    var $this = this,
      $global = $this.JSSDK.Global,
      version = $this.JSSDK.Resource.VERSION,
      guidData = $this.Cookie.get('udb_guiddata');
    $global = $this.Util.extend($global, options);
    if (
      $global.hasOwnProperty('start') &&
      $global.start &&
      typeof $global.start == 'function'
    )
      $global.start.call(window);
    if (!guidData || guidData == undefined || guidData == '')
      $this.Cookie.set('udb_guiddata', $this.Util.guid(), $global.domain, 365);
    $global.exchange = $this.Util.guid(1);
    $this.Mobile.check($global.bridge);
    $this.PC.check();
    $this.Html.add({
      tag: 'iframe',
      urlList: [
        ($global.loadFunc.hasOwnProperty('login') && $global.loadFunc.login) ||
        !$global.loadFunc.hasOwnProperty('login')
          ? {
              id: 'udb_exchangelgn' + $global.session,
              url:
                $global.protocol +
                '://' +
                $global.domainFunc.login +
                '.' +
                $global.domain +
                '/web/middle/' +
                encodeURIComponent(version) +
                '/' +
                $global.exchange +
                '/' +
                $global.protocol
            }
          : null,
        ($global.loadFunc.hasOwnProperty('thrid') && $global.loadFunc.thrid) ||
        !$global.loadFunc.hasOwnProperty('thrid')
          ? {
              id: 'udb_exchange3lgn' + $global.session,
              url:
                $global.protocol +
                '://' +
                $global.domainFunc.thrid +
                '.' +
                $global.domain +
                '/web/middle/' +
                encodeURIComponent(version) +
                '/' +
                $global.exchange +
                '/' +
                $global.protocol
            }
          : null,
        ($global.loadFunc.hasOwnProperty('register') &&
          $global.loadFunc.register) ||
        !$global.loadFunc.hasOwnProperty('register')
          ? {
              id: 'udb_exchangereg' + $global.session,
              url:
                $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/web/middle/' +
                encodeURIComponent(version) +
                '/' +
                $global.exchange +
                '/' +
                $global.protocol
            }
          : null,
        $global.loadFunc.hasOwnProperty('security') && $global.loadFunc.security
          ? {
              id: 'udb_exchangesec' + $global.session,
              url:
                $global.protocol +
                '://' +
                $global.domainFunc.security +
                '.' +
                $global.domain +
                '/web/middle/' +
                encodeURIComponent(version) +
                '/' +
                $global.exchange +
                '/' +
                $global.protocol
            }
          : null,
        $global.loadFunc.hasOwnProperty('api') && $global.loadFunc.api
          ? {
              id: 'udb_exchangeapi' + $global.session,
              url:
                $global.protocol +
                '://' +
                $global.domainFunc.api +
                '.' +
                $global.domain +
                '/web/middle/' +
                encodeURIComponent(version) +
                '/' +
                $global.exchange +
                '/' +
                $global.protocol
            }
          : null
      ],
      success: function () {
        try {
          $this.Message.error('SDK_INF', 'INITSUC');
        } catch (except) {}
        if (
          $global.hasOwnProperty('success') &&
          $global.success &&
          typeof $global.success == 'function'
        )
          $global.success.call(window);
      },
      error: function (error) {
        try {
          $this.Message.error('EXH_INT', 'INITERR', error.message);
        } catch (except) {}
        if (
          $global.hasOwnProperty('error') &&
          $global.error &&
          typeof $global.error == 'function'
        )
          $global.error.call(window);
      }
    });
    if (
      $global.hasOwnProperty('complete') &&
      $global.complete &&
      typeof $global.complete == 'function'
    )
      $global.complete.call(window);
  };
  /**
   * @description Login对象，对外提供phone，thrid方法
   */
  HyUDBWebSDK.prototype.Login = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Login.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
      this.$global = $this.JSSDK.Global;
      this.$message = $this.Message;
      this.$mobile = $this.Mobile;
      this.$pc = $this.PC;
      this.$item = $this.Item;
      this.$resource = $this.JSSDK.Resource;
      this.Third.init(this);
      this.V2.init(this);
    },
    /**
     * @description 匿名登录
     * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
     * @param {number} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
     * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
     * @param {*} success - 登录成功回调方法，style=1有效,response：JSON格式{"uri":"10014","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"108526","passport":"108526hy","version":"1.0","biztoken":"AQCoaF1t1g43qg","status":0,"nickName":"Jack","regOrigin":0,"domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
     * @param {*} error - 登录失败回调方法，style=1有效,response：JSON格式{"uri":"10014","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
     * @example 手机登录：
     * HyUDBWebSDK.Login.anonymous({
     *		action:1,
     *		style:1,
     *		error:function(response){},
     *		success:function(response){},
     * });
     */
    anonymous: function (options) {
      var uri = '10013',
        $this = this,
        $parent = $this.$parent,
        $mobile = $this.$mobile,
        $message = $this.$message,
        $global = $this.$global,
        $item = $this.$item;
      options = $parent.Util.store(uri, $parent, options);
      if (options.style == 1 || (options.style == 2 && !$mobile.able()))
        $message.send(
          'udb_exchangelgn' + $global.session,
          $message.encode(
            $global.protocol +
              '://' +
              $global.domainFunc.login +
              '.' +
              $global.domain +
              '/web/anonymousLogin',
            'post',
            uri,
            'WB',
            '{"domainList":"' + $item.convert($global.domainList) + '"}'
          )
        );
      else if (options.style == 2 && $mobile.able()) {
        $mobile.get('common', function (response) {
          $message.send(
            'udb_exchangelgn' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.login +
                '.' +
                $global.domain +
                '/web/anonymousLogin',
              'post',
              uri,
              'H5',
              '{"domainList":"' +
                $item.convert($global.domainList) +
                '","wupData":"' +
                $item.convert(response) +
                '"}'
            )
          );
        });
      }
    },
    /**
     * @description 手机登录
     * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
     * @param {number} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
     * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
     * @param {string} data.phone - 手机号码，必填，8-16位数据，第一位以0开始
     * @param {string} data.password - 密码，必填，6-20位字母/数字的组合,不能为全数字
     * @param {number} data.remember - 记住登录状，0：不记住（写会话Cookie），1：记住（写Cookie一周）
     * @param {string} data.countryCode - 国家代码，2个字符
     * @param {*} success - 登录成功回调方法，style=1有效,response：JSON格式{"uri":"10010","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"108526","passport":"108526hy","version":"1.0","biztoken":"AQCoaF1t1g43qg","status":0,"nickName":"Jack","regOrigin":0,"domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
     * @param {*} error - 登录失败回调方法，style=1有效,response：JSON格式{"uri":"10010","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
     * @example 手机登录：
     * HyUDBWebSDK.Login.phone({
     *		action:1,
     *		style:1,
     *		data:{
     *			phone:'08613600000000',
     *			password:'1ddaadfff',
     *			remember:0,
     *			countryCode:'86'
     *		},
     *		error:function(response){},
     *		success:function(response){},
     * });
     */
    phone: function (options) {
      var uri = '10009',
        $this = this,
        $parent = $this.$parent,
        $mobile = $this.$mobile,
        $message = $this.$message,
        $global = $this.$global,
        $item = $this.$item;
      options = $parent.Util.store(uri, $parent, options);
      if (options.style == 1 || (options.style == 2 && !$mobile.able()))
        $message.send(
          'udb_exchangelgn' + $global.session,
          $message.encode(
            $global.protocol +
              '://' +
              $global.domainFunc.login +
              '.' +
              $global.domain +
              '/web/passwordLogin',
            'post',
            uri,
            'WB',
            '{"phone":"' +
              $item.convert(options.data.phone) +
              '","password":"' +
              $item.convert(options.data.password) +
              '","domainList":"' +
              $item.convert($global.domainList) +
              '","remember":"' +
              $item.convert(options.data.remember, 0) +
              '","countryCode":"' +
              $item.convert(options.data.countryCode) +
              '"}'
          )
        );
      else if (options.style == 2 && $mobile.able()) {
        $mobile.get('common', function (response) {
          $message.send(
            'udb_exchangelgn' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.login +
                '.' +
                $global.domain +
                '/web/passwordLogin',
              'post',
              uri,
              'H5',
              '{"phone":"' +
                $item.convert(options.data.phone) +
                '","password":"' +
                $item.convert(options.data.password) +
                '","domainList":"' +
                $item.convert($global.domainList) +
                '","remember":"' +
                $item.convert(options.data.remember, 0) +
                '","countryCode":"' +
                $item.convert(options.data.countryCode) +
                '","wupData":"' +
                $item.convert(response) +
                '"}'
            )
          );
        });
      }
    },
    /**
     * @description 获取开放平台授权应用信息
     * @param {string} data.openAppId - 接入应用开发平台申请的appId
     * @param {string} data.packageName - 接入申请时填的包名
     * @param {string} data.signature - 签名
     * @param {string} data.encryptedData - 加密串 md5(openAppId + "_" + packageName + "_" + signature)
     * @param {string} data.platform - 调用平台信息（ios/android）
     * @param {*} success - 成功回调方法 {code:0; msg: "success"; data: {sessionId: "sdfsdfsdf"; appName: "omlet"; appLogo: "http://www.huya.com/logo"; appScope: "123423"}}
     * @param {*} error -回调方法 {code:0; msg: "success"; data: {sessionId: "sdfsdfsdf"; appName: "omlet"; appLogo: "http://www.huya.com/logo"; appScope: "123423"}}
     * @example 获取开放平台授权应用信息：
     * HyUDBWebSDK.Login.appInfo({
     *		data:{
     *			openAppId:'xxx',
     *			packageName:'com.huya.xxx',
     *			signature: 'xxx',
     *			encryptedData:'xxx',
     *      platform: 'ios/android'
     *		},
     *		success:function(response){},
     *		error:function(response){},
     * });
     */
    appInfo: function (options) {
      var uri = '10017',
        $this = this,
        $parent = $this.$parent,
        $mobile = $this.$mobile,
        $message = $this.$message,
        $global = $this.$global,
        $item = $this.$item;
      options = $parent.Util.store(uri, $parent, options);
      if (options.style == 1 || (options.style == 2 && !$mobile.able()))
        $message.send(
          'udb_exchangeapi' + $global.session,
          $message.encode(
            $global.protocol +
              '://' +
              $global.domainFunc.api +
              '.' +
              $global.domain +
              '/open/oauth/appInfo',
            'post',
            uri,
            'WB',
            '{"openAppId":"' +
              $item.convert(options.data.openAppId) +
              '","packageName":"' +
              $item.convert(options.data.packageName) +
              '","signature":"' +
              $item.convert(options.data.signature) +
              '","encryptedData":"' +
              $item.convert(options.data.encryptedData) +
              '","platform":"' +
              $item.convert(options.data.platform) +
              '"}'
          )
        );
      else if (options.style == 2 && $mobile.able()) {
        $mobile.get('common', function (response) {
          $message.send(
            'udb_exchangeapi' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.api +
                '.' +
                $global.domain +
                '/open/oauth/appInfo',
              'post',
              uri,
              'H5',
              '{"openAppId":"' +
                $item.convert(options.data.openAppId) +
                '","packageName":"' +
                $item.convert(options.data.packageName) +
                '","signature":"' +
                $item.convert(options.data.signature) +
                '","encryptedData":"' +
                $item.convert(options.data.encryptedData) +
                '","platform":"' +
                $item.convert(options.data.platform) +
                '","wupData":"' +
                $item.convert(response) +
                '"}'
            )
          );
        });
      }
    },
    /**
     * @description 开放平台密码登录
     * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
     * @param {number} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
     * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
     * @param {string} data.phone - 手机号码，必填，8-16位数据，第一位以0开始
     * @param {string} data.password - 密码，必填，6-20位字母/数字的组合,不能为全数字
     * @param {number} data.remember - 记住登录状，0：不记住（写会话Cookie），1：记住（写Cookie一周）
     * @param {string} data.countryCode - 国家代码，2个字符
     * @param {string} data.openAppId - 接入应用开发平台申请的appId
     * @param {*} success - 登录成功回调方法，style=1有效,response：JSON格式{"uri":"10010","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"108526","passport":"108526hy","version":"1.0","biztoken":"AQCoaF1t1g43qg","status":0,"nickName":"Jack","regOrigin":0,"domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
     * @param {*} error - 登录失败回调方法，style=1有效,response：JSON格式{"uri":"10010","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
     * @example 手机登录：
     * HyUDBWebSDK.Login.oauthPasswordLogin({
     *		action:1,
     *		style:1,
     *		data:{
     *			phone:'08613600000000',
     *			password:'1ddaadfff',
     *			remember:0,
     *			countryCode:'86',
     *      openAppId: 'xxxx'
     *		},
     *		error:function(response){},
     *		success:function(response){},
     * });
     */
     oauthPasswordLogin: function (options) {
      var uri = '10019',
        $this = this,
        $parent = $this.$parent,
        $mobile = $this.$mobile,
        $message = $this.$message,
        $global = $this.$global,
        $item = $this.$item;
      options = $parent.Util.store(uri, $parent, options);
      if (options.style == 1 || (options.style == 2 && !$mobile.able()))
        $message.send(
          'udb_exchangeapi' + $global.session,
          $message.encode(
            $global.protocol +
              '://' +
              $global.domainFunc.api +
              '.' +
              $global.domain +
              '/open/oauth/passwordLogin',
            'post',
            uri,
            'WB',
            '{"phone":"' +
              $item.convert(options.data.phone) +
              '","password":"' +
              $item.convert(options.data.password) +
              '","domainList":"' +
              $item.convert($global.domainList) +
              '","remember":"' +
              $item.convert(options.data.remember, 0) +
              '","countryCode":"' +
              $item.convert(options.data.countryCode) +
              '","openAppId":"' +
              $item.convert(options.data.openAppId) +
              '"}'
          )
        );
      else if (options.style == 2 && $mobile.able()) {
        $mobile.get('common', function (response) {
          $message.send(
            'udb_exchangeapi' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.api +
                '.' +
                $global.domain +
                '/open/oauth/passwordLogin',
              'post',
              uri,
              'H5',
              '{"phone":"' +
                $item.convert(options.data.phone) +
                '","password":"' +
                $item.convert(options.data.password) +
                '","domainList":"' +
                $item.convert($global.domainList) +
                '","remember":"' +
                $item.convert(options.data.remember, 0) +
                '","countryCode":"' +
                $item.convert(options.data.countryCode) +
                '","openAppId":"' +
                $item.convert(options.data.openAppId) +
                '","wupData":"' +
                $item.convert(response) +
                '"}'
            )
          );
        });
      }
    },
    /**
     * @description 第三方登录
     * @param {number} action - 登陆后的跳转标识（1：登陆后跳转默认配置的地址，2：登陆成功后，跳转指定的busiurl），缺省=1
     * @param {string} type - 互联类型（fb：FaceBook，gg：Google，tw：Twitter，qq：QQ，wb：微博，wx：微信）
     * @param {string} terminal - 终端类型（web：网站，app：移动端，oa：公众号）
     * @param {number} win - 互联类型（0：弹出窗口，1：打开TAB）
     * @param {number} width - 弹窗宽度，缺省500
     * @param {number} height - 弹窗高度，缺省600
     * @param {number} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
     * @param {string} busiurl - 登陆后的指定跳转链接，style=1 && action=2才能执行跳转，缺省=http://www.huya.com，微信公众号服务端跳转，Cookies只能写主域名
     * @param {string} data.countryCode - 国家代码，2个字符
     * @param {*} success - 第三方登录成功回调方法，style=1有效,response：JSON格式{"uri":"10002","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"108526","passport":"108526hy","version":"1.0","biztoken":"AQCoaF1t1g43qg","status":0,"nickName":"Jack","regOrigin":0,"domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
     * @param {*} error - 第三方登录失败回调方法，style=1有效,response：JSON格式{"uri":"10002","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
     * @example 第三方登录：
     * HyUDBWebSDK.Login.third({
     *		action:2,
     *		style:1,
     *       type:'fb',
     *		data:{
     *			countryCode:'86'
     *		},
     *		success:function(response){},
     *		error:function(response){}
     * });
     */
    third: function (options) {
      var uri = '10001',
        $this = this,
        $parent = $this.$parent,
        $mobile = $this.$mobile,
        $global = $this.$global,
        $item = $this.$item;
      options = $parent.Util.store(uri, $parent, options, 1);
      var winHeigth = window.screen.availHeight;
      var winWidth = window.screen.availWidth;
      var param = ['uri=' + uri];
      for (var key in $global) {
        if (
          key != 'lcid' &&
          key != 'protocol' &&
          key != 'domainFunc' &&
          key != 'bridge' &&
          key != 'session' &&
          key != 'success' &&
          key != 'error' &&
          key != 'start' &&
          key != 'complete'
        )
          if(key=='sdid'){
            param.push(key+'='+encodeURIComponent($parents.Util.getSdid()));
          }else
            param.push(key+'='+encodeURIComponent($global[key] || ''));
      }
      for (var key in options) {
        if (options[key] && typeof options[key] == 'object') {
          for (var childKey in options[key]) {
            if (
              options[key][childKey] &&
              typeof options[key][childKey] == 'object'
            ) {
              for (var thirdKey in options[key][childKey])
                param.push(
                  thirdKey +
                    '=' +
                    encodeURIComponent(options[key][childKey][thirdKey] || '')
                );
            } else
              param.push(
                childKey +
                  '=' +
                  encodeURIComponent(options[key][childKey] || '')
              );
          }
        } else if (
          key != 'width' &&
          key != 'height' &&
          key != 'success' &&
          key != 'error' &&
          key != 'start' &&
          key != 'complete'
        )
          param.push(key + '=' + encodeURIComponent(options[key] || ''));
      }
      var login =
        $global.protocol +
        '://' +
        $global.domainFunc.thrid +
        '.' +
        $global.domain +
        '/web/signin?';
      if (options.terminal == 'oa' && $mobile.device().weixin)
        $parent.location(login + param.join('&'));
      else if (options.terminal != 'oa') {
        if (options.style == 1 || (options.style == 2 && !$mobile.able())) {
          if (options.win == 0)
            window.open(
              login + param.join('&'),
              '',
              'height=' +
                options.height +
                ',width=' +
                options.width +
                ',top=' +
                (winHeigth - options.height) / 2 +
                ',left=' +
                (winWidth - options.width) / 2 +
                ',toolbar=no,menubar=no,resizable=no'
            );
          else window.open(login + param.join('&'));
        } else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $parent.location(
              login +
                param.join('&') +
                '&wupData=' +
                encodeURIComponent($item.convert(response))
            );
          });
        }
      }
    },
    /**
     * @description 对象，对外提供虎牙短信登录常用code,login等方法
     */
    Third: (prototype = {
      /**
       * @description 初始化实例对象
       * @param {object} $this - 传递父对象
       * @example
       * HyUDBWebSDK.Login.Third.init(this);
       */
      init: function ($this) {
        this.$parent = $this;
        this.$global = $this.$global;
        this.$message = $this.$message;
        this.$mobile = $this.$mobile;
        this.$pc = $this.PC;
        this.$item = $this.$item;
        this.$resource = $this.$resource;
      },
      /**
       * @description 第三方登录
       * @param {number} action - 登陆后的跳转标识（1：登陆后跳转默认配置的地址，2：登陆成功后，跳转指定的busiurl），缺省=1
       * @param {string} type - 互联类型（fb：FaceBook，gg：Google，tw：Twitter，qq：QQ，wb：微博，wx：微信）
       * @param {string} terminal - 终端类型（web：网站，app：移动端，oa：公众号）
       * @param {number} win - 互联类型（0：弹出窗口，1：打开TAB）
       * @param {number} width - 弹窗宽度，缺省500
       * @param {number} height - 弹窗高度，缺省600
       * @param {number} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
       * @param {string} busiurl - 登陆后的指定跳转链接，style=1 && action=2才能执行跳转，缺省=http://www.huya.com，微信公众号服务端跳转，Cookies只能写主域名
       * @param {string} data.countryCode - 国家代码，2个字符
       * @param {string} data.bizData - 业务数据透传
       * @param {*} success - 第三方登录成功回调方法，style=1有效,response：JSON格式{"uri":"10002","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"108526","passport":"108526hy","version":"1.0","biztoken":"AQCoaF1t1g43qg","status":0,"nickName":"Jack","regOrigin":0,"domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
       * @param {*} error - 第三方登录失败回调方法，style=1有效,response：JSON格式{"uri":"10002","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example 第三方登录：
       * HyUDBWebSDK.Login.Third.login({
       *		action:2,
       *		style:1,
       *       type:'fb',
       *		data:{
       *			countryCode:'86',
       *			bizData:''
       *		},
       *		success:function(response){},
       *		error:function(response){}
       * });
       */
      login: function (options) {
        var uri = '10001',
          $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $global = $this.$global,
          $item = $this.$item,
          winHeigth = window.screen.availHeight,
          winWidth = window.screen.availWidth,
          param = ['uri=' + uri];
        options = $parents.Util.store(uri, $parents, options, 1);
        for (var key in $global) {
          if (
            key != 'lcid' &&
            key != 'protocol' &&
            key != 'domainFunc' &&
            key != 'bridge' &&
            key != 'session' &&
            key != 'success' &&
            key != 'error' &&
            key != 'start' &&
            key != 'complete' &&
            key != 'pcecall' &&
            key != 'mobcall'
          )
            if(key=='sdid'){
              param.push(key+'='+encodeURIComponent($parents.Util.getSdid()));
            }else
              param.push(key+'='+encodeURIComponent($global[key] || ''));
        }
        for (var key in options) {
          if (options[key] && typeof options[key] == 'object') {
            for (var childKey in options[key]) {
              if (
                options[key][childKey] &&
                typeof options[key][childKey] == 'object'
              ) {
                for (var thirdKey in options[key][childKey])
                  param.push(
                    thirdKey +
                      '=' +
                      encodeURIComponent(options[key][childKey][thirdKey] || '')
                  );
              } else
                param.push(
                  childKey +
                    '=' +
                    encodeURIComponent(options[key][childKey] || '')
                );
            }
          } else if (
            key != 'width' &&
            key != 'height' &&
            key != 'success' &&
            key != 'error' &&
            key != 'start' &&
            key != 'complete' &&
            key != 'pcecall' &&
            key != 'mobcall'
          )
            param.push(key + '=' + encodeURIComponent(options[key] || ''));
        }
        var login =
          $global.protocol +
          '://' +
          $global.domainFunc.thrid +
          '.' +
          $global.domain +
          '/web/signin?';
        if (options.terminal == 'oa' && $mobile.device().weixin)
          $parents.location(login + param.join('&'));
        else if (options.terminal != 'oa') {
          if (options.style == 1 || (options.style == 2 && !$mobile.able())) {
            if (options.win == 0)
              window.open(
                login + param.join('&'),
                '',
                'height=' +
                  options.height +
                  ',width=' +
                  options.width +
                  ',top=' +
                  (winHeigth - options.height) / 2 +
                  ',left=' +
                  (winWidth - options.width) / 2 +
                  ',toolbar=no,menubar=no,resizable=no'
              );
            else window.open(login + param.join('&'));
          } else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $parents.location(
                login +
                  param.join('&') +
                  '&wupData=' +
                  encodeURIComponent($item.convert(response))
              );
            });
          }
        }
      },
      /**
       * @description 第三方互联
       * @param {number} action - 登陆后的跳转标识（1：登陆后跳转默认配置的地址，2：登陆成功后，跳转指定的busiurl），缺省=1
       * @param {number} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
       * @param {string} busiurl - 登陆后的指定跳转链接，style=1 && action=2才能执行跳转，缺省=http://www.huya.com，微信公众号服务端跳转，Cookies只能写主域名
       * @param {string} data.code - 一次性验证码
       * @param {string} data.bizData - 业务数据
       * @param {*} success - 第三方登录成功回调方法，style=1有效,response：JSON格式{"uri":"10003","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"108526","passport":"108526hy","version":"1.0","biztoken":"AQCoaF1t1g43qg","status":0,"nickName":"Jack","regOrigin":0,"domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
       * @param {*} error - 第三方登录失败回调方法，style=1有效,response：JSON格式{"uri":"10004","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example 第三方登录：
       * HyUDBWebSDK.Login.Third.connect({
       *		action:2,
       *		style:1,
       *		data:{
       *			code:'123123123123123123',
       *			bizData:''
       *		},
       *		success:function(response){},
       *		error:function(response){}
       * });
       */
      connect: function (options) {
        var uri = '10003',
          $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $message = $this.$message,
          $global = $this.$global,
          $item = $this.$item;
        options = $parents.Util.store(uri, $parents, options);
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchange3lgn' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.thrid +
                '.' +
                $global.domain +
                '/web/third/reLogin',
              'post',
              uri,
              'WB',
              '{"code":"' +
                $item.convert(options.data.code) +
                '","bizData":"' +
                $item.convert(options.data.bizData) +
                '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchange3lgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.thrid +
                  '.' +
                  $global.domain +
                  '/web/third/reLogin',
                'post',
                uri,
                'H5',
                '{"code":"' +
                  $item.convert(options.data.code) +
                  '","bizData":"' +
                  $item.convert(options.data.bizData) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      }
    }),
    /**
     * @description 登录登出
     * @param {number} action - 登出后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
     * @param {number} type - 登出类型（10：ajax，其他get），缺省=无
     * @param {number} style - 登出方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录：WAP端），缺省=1
     * @param {string} busiurl - action=2，登出后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
     * @param {*} success - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"10016","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"","passport":"","version":"","biztoken":"","status":0,"nickName":"","domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
     * @param {*} error - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"10016","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
     * @example 登录登出：
     * HyUDBWebSDK.Login.logout({
     *		action:1,
     *		style:1,
     *		error:function(response){},
     *		success:function(response){},
     * });
     */
    logout: function (options) {
      var uri = '10015',
        $this = this,
        $parent = $this.$parent,
        $global = $this.$global,
        $mobile = $this.$mobile,
        $message = $this.$message,
        $global = $this.$global,
        $item = $this.$item;
      options = $parent.Util.store(uri, $parent, options);
      if (
        options.hasOwnProperty('type') &&
        options.type &&
        options.type == 10
      ) {
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangelgn' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.login +
                '.' +
                $global.domain +
                '/web/logout',
              'post',
              uri,
              'WB',
              '{"domainList":"' + $item.convert($global.domainList) + '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/web/logout',
                'post',
                uri,
                'H5',
                '{"domainList":"' +
                  $item.convert($global.domainList) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      } else
        $parent.Html.add({
          tag: 'iframe',
          urlList: $parent.Cookie.url(
            $global.domainFunc.hasOwnProperty('login') &&
              $global.domainFunc.login
              ? $global.domainFunc.login
              : 'udblgn',
            '/web/logout?' + $parent.Util.guid(1)
          ),
          success: function () {
            try {
              $parent.Cookie.remove('udb_uid');
            } catch (except) {}
            try {
              $parent.Cookie.remove('udb_biztoken');
            } catch (except) {}
            try {
              $parent.Cookie.remove('udb_passport');
            } catch (except) {}
            try {
              $parent.Cookie.remove('udb_version');
            } catch (except) {}
            $parent.Callback.handle(
              {
                uri: (parseInt(uri) + 1).toString(),
                version: '1.0',
                context: '',
                returnCode: '0',
                message: '',
                description: '',
                data: {
                  uid: '',
                  passport: '',
                  version: '',
                  biztoken: '',
                  status: 0,
                  nickName: '',
                  domainUrlList: $parent.Cookie.url('udblgn', '/web/logout')
                }
              },
              $parent.JSSDK.Command[uri]
            );
          }
        });
    },
    /**
     * @description V2对象，对外提供虎牙登录常用login等方法
     */
    V2: (prototype = {
      /**
       * @description 初始化实例对象
       * @param {object} $this - 传递父对象
       * @example
       * HyUDBWebSDK.Login.V2.init(this);
       */
      init: function ($this) {
        this.$parent = $this;
        this.$global = $this.$global;
        this.$message = $this.$message;
        this.$mobile = $this.$mobile;
        this.$pc = $this.$pc;
        this.$item = $this.$item;
        this.$resource = $this.$resource;
        this.QrCode.init(this);
        this.Sms.init(this);
      },
      /**
       * @description 快速登录
       * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
       * @param {number} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
       * @param {string} busiurl - style=1 && action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
       * @param {string} data.callback - 回调地址
       * @param {string} data.ticket5060 - 登录ticket
       * @param {number} data.uid - YYUID
       * @param {*} success - 登录成功回调方法，style=1有效,response：JSON格式{"uri":30007,"version":null,"context":null,"returnCode":0,"message":null,"description":null,"data":{"uid":1744730594,"passport":"hyudb_test01","ticket5060":"%%2FDCB%%%2BF1%2FDT3%%%2F","lgnsuc":true,"subUid":0,"regOrigin":0,"version":"1.0","biztoken":"AQCMUddddafffffff","status":0,"strategys":[{"strategy":8,"uid":1744730612,"selectTitle":"手机短信验证码","promptTitle":"手机短信验证码","promptContent":"135***15","dataType":0,"data":null,"promptBoxHigh":0,"promptBoxLength":0}],"sessionData":"+zzUalPTr++bmVpqp84TS++C5EJbtBd74h"}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
       * @param {*} redirect - 跳转回调方法，
       * @param {*} error - 登录失败回调方法，style=1有效,response：JSON格式{"uri":"30008","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @returns {string} - 返回快速登录地址
       * @example 手机登录：
       * HyUDBWebSDK.Login.V2.quick({
       *	action:2,
       *	style:1,
       *	data:{
       *		userName:'08613600000000',
       *		password:'1ddaadfff',
       *		remember:0
       *	}
       *	error:function(response){},
       *	redirect:function(response){},
       *	success:function(response){}
       * });
       */
      quick: function (options) {
        var uri = '30007',
          $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $message = $this.$message,
          $global = $this.$global,
          $item = $this.$item;
        if ($global.byPass == 3) {
          options = $parents.Util.store(uri, $parents, options);
          if (options.style == 1 || (options.style == 2 && !$mobile.able()))
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/web/v2/quickTicket',
                'post',
                uri,
                'WB',
                '{"uid":"' +
                  $item.convert(options.data.uid) +
                  '","ticket":"' +
                  $item.convert(options.data.ticket5060) +
                  '","domainList":"' +
                  $item.convert($global.domainList) +
                  '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/web/v2/quickTicket',
                  'post',
                  uri,
                  'H5',
                  '{"uid":"' +
                    $item.convert(options.data.uid) +
                    '","ticket":"' +
                    $item.convert(options.data.ticket5060) +
                    '","domainList":"' +
                    $item.convert($global.domainList) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          }
        } else if (options.redirect && typeof options.redirect == 'function')
          options.redirect.call(
            window,
            $global.protocol +
              '://' +
              $global.domainFunc.login +
              '.' +
              $global.domain +
              '/web/v2/quickLogin?callback=' +
              encodeURIComponent(options.data.callback) +
              '&ticket=' +
              encodeURIComponent(options.data.ticket5060) +
              '&byPass=' +
              $global.byPass +
              '&remember=' +
              options.data.remember +
              '&yyuid=' +
              options.data.uid
          );
      },
      /**
       * @description 帐号登录
       * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
       * @param {number} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
       * @param {string} busiurl - style=1 && action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
       * @param {string} data.userName - 帐号，必填
       * @param {string} data.password - 密码，必填
       * @param {string} data.authcode - 前置验证码
       * @param {string} data.sessionData - 前置验证Session
       * @param {number} data.remember - 记住登录状，0：不记住（写会话Cookie），1：记住（写Cookie一周）
       * @param {*} success - 登录成功回调方法，style=1有效,response：JSON格式{"uri":30002,"version":null,"context":null,"returnCode":0,"message":null,"description":null,"data":{"uid":1744730594,"passport":"hyudb_test01","ticket5060":"%%2FDCB%%%2BF1%2FDT3%%%2F","lgnsuc":true,"subUid":0,"regOrigin":0,"version":"1.0","biztoken":"AQCMUddddafffffff","status":0,"strategys":[{"strategy":8,"uid":1744730612,"selectTitle":"手机短信验证码","promptTitle":"手机短信验证码","promptContent":"135***15","dataType":0,"data":null,"promptBoxHigh":0,"promptBoxLength":0}],"sessionData":"+zzUalPTr++bmVpqp84TS++C5EJbtBd74h"}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
       * @param {*} strategy- 登录过程策略回调方法[{"strategy":8,"uid":1744730612,"selectTitle":"手机短信验证码","promptTitle":"手机短信验证码","promptContent":"135***15","dataType":0,"data":null,"promptBoxHigh":0,"promptBoxLength":0}]
       * @param {*} error - 登录失败回调方法，style=1有效,response：JSON格式{"uri":"30002","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example 手机登录：
       * HyUDBWebSDK.Login.V2.account({
       *		action:2,
       *		style:1,
       *		data:{
       *			userName:'08613600000000',
       *			password:'1ddaadfff',
       *			authcode:'23333bc',
       *       	sessionData:'dddfasfsafsdfsdfsdfsdf',
       *			remember:0
       *		},
       *		error:function(response){},
       *		strategy:function(strategys){},
       *		success:function(response){}
       * });
       */
      account: function (options) {
        var uri = '30001',
          $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $message = $this.$message,
          $global = $this.$global,
          $item = $this.$item;
        options = $parents.Util.store(uri, $parents, options);
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangelgn' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.login +
                '.' +
                $global.domain +
                '/web/v2/passwordLogin',
              'post',
              uri,
              'WB',
              '{"userName":"' +
                $item.convert(options.data.userName) +
                '","password":"' +
                $item.convert(options.data.password) +
                (options.data.hasOwnProperty('authcode')
                  ? '","authcode":"' + $item.convert(options.data.authcode)
                  : '') +
                (options.data.hasOwnProperty('authcode')
                  ? '","sessionData":"' +
                    $item.convert(
                      options.data.hasOwnProperty('sessionData')
                        ? options.data.sessionData
                        : $parents.Cookie.get($global.session)
                    )
                  : '') +
                '","domainList":"' +
                $item.convert($global.domainList) +
                '","remember":"' +
                $item.convert(options.data.remember, 0) +
                '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/web/v2/passwordLogin',
                'post',
                uri,
                'H5',
                '{"userName":"' +
                  $item.convert(options.data.userName) +
                  '","password":"' +
                  $item.convert(options.data.password) +
                  (options.data.hasOwnProperty('authcode')
                    ? '","authcode":"' + $item.convert(options.data.authcode)
                    : '') +
                  (options.data.hasOwnProperty('authcode')
                    ? '","sessionData":"' +
                      $item.convert(
                        options.data.hasOwnProperty('sessionData')
                          ? options.data.sessionData
                          : $parents.Cookie.get($global.session)
                      )
                    : '') +
                  '","domainList":"' +
                  $item.convert($global.domainList) +
                  '","remember":"' +
                  $item.convert(options.data.remember, 0) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      },
      /**
       * @description 第三方登录，第三方登录不会出现各种策略
       * @param {number} action - 登陆后的跳转标识（1：登陆后跳转默认配置的地址，2：登陆成功后，跳转指定的busiurl，跳转指定的busiurl），缺省=1
       * @param {string} type - 互联类型（qq：QQ，wb：微博，wx：微信）
       * @param {string} terminal - 互联类型（web：网站，app：移动端，oa：公众号）
       * @param {number} win - 互联类型（0：弹出窗口，1：打开TAB，2：内部iframe，3：当前窗口跳转）
       * @param {number} width - 弹窗宽度，缺省500
       * @param {number} height - 弹窗高度，缺省600
       * @param {number} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
       * @param {string} busiurl - astyle=1 && action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com，微信公众号服务端跳转，Cookies只能写主域名
       * @param {string} data.track.biz - 业务，如H5/游戏
       * @param {string} data.track.source - 来源，如百度/新浪等
       * @param {string} data.track.channel - 渠道，如来源下的某个渠道
       * @param {*} callback - iframe内嵌回调方法，在回调方法中进行外观调整
       * @param {*} success - 第三方登录成功回调方法，style=1有效,response：JSON格式{"uri":"10002","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"108526","passport":"108526hy","version":"1.0","biztoken":"AQCoaF1t1g43qg","status":0,"nickName":"Jack","regOrigin":0,"domainUrlList":[],"ticket5060":"%%2FDCB%%%2BF1%2FDT3%%%2F"}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
       * @param {*} error - 第三方登录失败回调方法，style=1有效,response：JSON格式{"uri":"10002","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example 第三方登录：
       * HyUDBWebSDK.Login.V2.third({
       *		action:2,
       *		style:1,
       *       type:'qq',
       *		success:function(response){},
       *		error:function(response){}
       * });
       */
      third: function (options) {
        var uri = '30003',
          $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $message = $this.$message,
          $global = $this.$global,
          $item = $this.$item;
        options = $parents.Util.store(uri, $parents, options, 1);
        var winHeigth = window.screen.availHeight;
        var winWidth = window.screen.availWidth;
        var param = ['uri=' + uri, 'requestId=' + $parents.Util.guid(1)];
        for (var key in $global) {
          if (
            key != 'lcid' &&
            key != 'protocol' &&
            key != 'domainFunc' &&
            key != 'loadFunc' &&
            key != 'bridge' &&
            key != 'session' &&
            key != 'success' &&
            key != 'error' &&
            key != 'start' &&
            key != 'complete'
          )
            if(key=='sdid'){
              param.push(key+'='+encodeURIComponent($parents.Util.getSdid()));
            }else
              param.push(key+'='+encodeURIComponent($global[key] || ''));
        }
        for (var key in options) {
          if (options[key] && typeof options[key] == 'object') {
            for (var childKey in options[key]) {
              if (
                options[key][childKey] &&
                typeof options[key][childKey] == 'object'
              ) {
                for (var thirdKey in options[key][childKey])
                  param.push(
                    thirdKey +
                      '=' +
                      encodeURIComponent(options[key][childKey][thirdKey] || '')
                  );
              } else
                param.push(
                  childKey +
                    '=' +
                    encodeURIComponent(options[key][childKey] || '')
                );
            }
          } else if (
            key != 'width' &&
            key != 'height' &&
            key != 'success' &&
            key != 'error' &&
            key != 'strategy' &&
            key != 'callback' &&
            key != 'start' &&
            key != 'complete'
          )
            param.push(key + '=' + encodeURIComponent(options[key] || ''));
        }
        var login =
          $global.protocol +
          '://' +
          $global.domainFunc.thrid +
          '.' +
          $global.domain +
          '/web/v2/signin?';
        if (options.terminal == 'oa')
          $parents.location(login + param.join('&'));
        else if (options.terminal != 'oa') {
          if (options.style == 1 || (options.style == 2 && !$mobile.able())) {
            if (options.win == 0)
              window.open(
                login + param.join('&'),
                '',
                'height=' +
                  options.height +
                  ',width=' +
                  options.width +
                  ',top=' +
                  (winHeigth - options.height) / 2 +
                  ',left=' +
                  (winWidth - options.width) / 2 +
                  ',toolbar=no,menubar=no,resizable=no'
              );
            else if (
              options.win == 2 &&
              options.callback &&
              typeof options.callback == 'function'
            )
              options.callback.call(window, {
                type: options.type,
                url: login + param.join('&')
              });
            else if (options.win == 3)
              $parents.location(login + param.join('&'));
            else window.open(login + param.join('&'));
          } else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $parents.location(
                login +
                  param.join('&') +
                  '&wupData=' +
                  encodeURIComponent($item.convert(response))
              );
            });
          }
        }
      },
      /**
       * @description 登录登出
       * @param {number} action - 登出后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
       * @param {number} style - 登出方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录：WAP端），缺省=1
       * @param {string} busiurl - action=2，登出后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
       * @param {*} success - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"30006","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"","passport":"","version":"","biztoken":"","status":0,"nickName":"","domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
       * @param {*} error - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"30006","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example 登录登出：
       * HyUDBWebSDK.Login.V2.logout({
       *		action:1,
       *		style:1,
       *		error:function(response){},
       *		success:function(response){},
       * });
       */
      logout: function (options) {
        var uri = '30005',
          $this = this,
          $parents = $this.$parent.$parent,
          $global = $this.$global;
        options = $parents.Util.store(uri, $parents, options);
        $parents.Html.add({
          tag: 'iframe',
          urlList: $parents.Cookie.url(
            $global.domainFunc.hasOwnProperty('login') &&
              $global.domainFunc.login
              ? $global.domainFunc.login
              : 'udblgn',
            '/web/v2/logout?' + $parents.Util.guid(1)
          ),
          success: function () {
            try {
              $parents.Cookie.remove('udb_uid');
            } catch (except) {}
            try {
              $parents.Cookie.remove('yyuid');
            } catch (except) {}
            try {
              $parents.Cookie.remove('udb_biztoken');
            } catch (except) {}
            try {
              $parents.Cookie.remove('udb_passport');
            } catch (except) {}
            try {
              $parents.Cookie.remove('udb_version');
            } catch (except) {}
            try {
              $parents.Cookie.remove('username');
            } catch (except) {}
            try {
              $parents.Cookie.remove('nickname');
            } catch (except) {}
            try {
              $parents.Cookie.remove('avatar');
            } catch (except) {}
            try {
              $parents.Cookie.remove('account_token');
            } catch (except) {}
            try {
              $parents.Cookie.remove('udb_l');
            } catch (except) {}
            try {
              $parents.Cookie.remove('udb_n');
            } catch (except) {}
            try {
              $parents.Cookie.remove('udb_oar');
            } catch (except) {}
            $parents.Callback.handle(
              {
                uri: (parseInt(uri) + 1).toString(),
                version: '1.0',
                context: '',
                returnCode: '0',
                message: '',
                description: '',
                data: {
                  uid: '',
                  passport: '',
                  version: '',
                  biztoken: '',
                  status: 0,
                  nickName: '',
                  domainUrlList: $parents.Cookie.url('udblgn', '/web/v2/logout')
                }
              },
              $parents.JSSDK.Command[uri]
            );
          }
        });
      },
      /**
       * @description QrCode对象，扫码登录
       */
      QrCode: (prototype = {
        /**
         * @description 初始化实例对象
         * @param {object} $this - 传递父对象
         * @example
         * HyUDBWebSDK.Login.V2.QrCode.init(this);
         */
        init: function ($this) {
          this.$parent = $this;
          this.$global = $this.$global;
          this.$message = $this.$message;
          this.$mobile = $this.$mobile;
          this.$pc = $this.$pc;
          this.$item = $this.$item;
          this.$resource = $this.$resource;
          this.iscode = false;
        },
        /**
         * @description 获取二维码图片
         * @param {number} action - 登出后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
         * @param {number} style - 登出方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录：WAP端，3：PC JSSDK登录，4：TV端），缺省=1
         * @param {string} busiurl - action=2，登出后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
         * @param {*} success - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"70001","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
         * @param {*} error - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"70002","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
         * @example 登录登出：
         * HyUDBWebSDK.Login.V2.QrCode.image({
         *		action:1,
         *		style:1,
         *		error:function(response){},
         *		success:function(response){},
         * });
         */
        image: function (options) {
          var uri = '70001',
            $this = this,
            $parents = $this.$parent.$parent.$parent,
            $mobile = $this.$mobile,
            $pc = $this.$pc,
            $message = $this.$message,
            $global = $this.$global,
            $item = $this.$item;
          options = $parents.Util.store(uri, $parents, options);
          if (
            options.style == 1 ||
            (options.style == 2 && !$mobile.able()) ||
            (options.style == 3 && !$pc.able())
          )
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/qrLgn/getQrId',
                'post',
                uri,
                'WB',
                '{}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('qrcommon', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/qrLgn/getQrId',
                  'post',
                  uri,
                  'H5',
                  '{"wupData":"' + $item.convert(response) + '"}'
                )
              );
            });
          } else if (options.style == 3 && $pc.able()) {
            $pc.get('qrcommon', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/qrLgn/getQrId',
                  'post',
                  uri,
                  'H5',
                  '{"wupData":"' + $item.convert(response) + '"}'
                )
              );
            });
          } else if (options.style == 4)
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/qrLgn/getQrId',
                'post',
                uri,
                'H5',
                '{"wupData":"' + $item.convert(options.data.wupData) + '"}'
              )
            );
        },
        /**
         * @description 检测
         * @param {number} action - 登出后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
         * @param {number} style - 登出方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录：WAP端，3：PC JSSDK登录，4：TV端），缺省=1
         * @param {string} busiurl - action=2，登出后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
         * @param {string} data.qrId - 二维码ID
         * @param {number} data.remember - 记住登录状，0：不记住（写会话Cookie），1：记住（写Cookie一周）
         * @param {*} success - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"70003","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"","passport":"","version":"","biztoken":"","status":0,"nickName":"","domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
         * @param {*} error - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"70004","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
         * @example 登录登出：
         * HyUDBWebSDK.Login.V2.QrCode.check({
         *		action:1,
         *		style:1,
         *		data:{
         *			qrId:'08613600000000',
         *			remember:0
         *		},
         *		error:function(response){},
         *		success:function(response){},
         * });
         */
        check: function (options) {
          var uri = '70003',
            $this = this,
            $parents = $this.$parent.$parent.$parent,
            $mobile = $this.$mobile,
            $pc = $this.$pc,
            $message = $this.$message,
            $global = $this.$global,
            $item = $this.$item;
          options = $parents.Util.store(uri, $parents, options);
          if (
            options.style == 1 ||
            (options.style == 2 && !$mobile.able()) ||
            (options.style == 3 && !$pc.able())
          )
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/qrLgn/tryQrLogin',
                'post',
                uri,
                'WB',
                '{"qrId":"' +
                  $item.convert(options.data.qrId) +
                  '","remember":"' +
                  $item.convert(options.data.remember, 0) +
                  '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('qrcommon', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/qrLgn/tryQrLogin',
                  'post',
                  uri,
                  'H5',
                  '{"qrId":"' +
                    $item.convert(options.data.qrId) +
                    '","remember":"' +
                    $item.convert(options.data.remember, 0) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          } else if (options.style == 3 && $pc.able()) {
            $pc.get('qrcommon', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/qrLgn/tryQrLogin',
                  'post',
                  uri,
                  'H5',
                  '{"qrId":"' +
                    $item.convert(options.data.qrId) +
                    '","remember":"' +
                    $item.convert(options.data.remember, 0) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          } else if (options.style == 4)
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/qrLgn/tryQrLogin',
                'post',
                uri,
                'H5',
                '{"qrId":"' +
                  $item.convert(options.data.qrId) +
                  '","remember":"' +
                  $item.convert(options.data.remember, 0) +
                  '","wupData":"' +
                  $item.convert(options.data.wupData) +
                  '"}'
              )
            );
        },
        /**
         * @description 通知
         * @param {number} action - 登出后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
         * @param {number} style - 登出方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录：WAP端，3：PC JSSDK登录，4：TV端），缺省=1
         * @param {string} busiurl - action=2，登出后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
         * @param {string} data.qrId - 二维码ID
         * @param {*} success - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"70005","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"","passport":"","version":"","biztoken":"","status":0,"nickName":"","domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
         * @param {*} error - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"70006","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
         * @example 登录登出：
         * HyUDBWebSDK.Login.V2.QrCode.notify({
         *		action:1,
         *		style:1,
         *		data:{
         *			qrId:'08613600000000'
         *		},
         *		error:function(response){},
         *		success:function(response){},
         * });
         */
        notify: function (options) {
          var uri = '70005',
            $this = this,
            $parents = $this.$parent.$parent.$parent,
            $mobile = $this.$mobile,
            $pc = $this.$pc,
            $message = $this.$message,
            $global = $this.$global,
            $item = $this.$item;
          options = $parents.Util.store(uri, $parents, options);
          if (
            options.style == 1 ||
            (options.style == 2 && !$mobile.able()) ||
            (options.style == 3 && !$pc.able())
          )
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/qrLgn/scanQrPicNotify',
                'post',
                uri,
                'WB',
                '{"qrId":"' + $item.convert(options.data.qrId) + '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('qrcommon', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/qrLgn/scanQrPicNotify',
                  'post',
                  uri,
                  'H5',
                  '{"qrId":"' +
                    $item.convert(options.data.qrId) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          } else if (options.style == 3 && $pc.able()) {
            $pc.get('qrcommon', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/qrLgn/scanQrPicNotify',
                  'post',
                  uri,
                  'H5',
                  '{"qrId":"' +
                    $item.convert(options.data.qrId) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          } else if (options.style == 4)
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/qrLgn/scanQrPicNotify',
                'post',
                uri,
                'H5',
                '{"qrId":"' +
                  $item.convert(options.data.qrId) +
                  '","wupData":"' +
                  $item.convert(options.data.wupData) +
                  '"}'
              )
            );
        },
        /**
         * @description 确认
         * @param {number} action - 登出后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
         * @param {number} style - 登出方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录：WAP端，3：PC JSSDK登录，4：TV端），缺省=1
         * @param {string} busiurl - action=2，登出后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
         * @param {string} data.qrId - 二维码ID
         * @param {*} success - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"70007","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"","passport":"","version":"","biztoken":"","status":0,"nickName":"","domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
         * @param {*} error - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"70008","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
         * @example 登录登出：
         * HyUDBWebSDK.Login.V2.QrCode.confirm({
         *		action:1,
         *		style:1,
         *		data:{
         *			qrId:'08613600000000'
         *		},
         *		error:function(response){},
         *		success:function(response){},
         * });
         */
        confirm: function (options) {
          var uri = '70007',
            $this = this,
            $parents = $this.$parent.$parent.$parent,
            $mobile = $this.$mobile,
            $pc = $this.$pc,
            $message = $this.$message,
            $global = $this.$global,
            $item = $this.$item;
          options = $parents.Util.store(uri, $parents, options);
          if (
            options.style == 1 ||
            (options.style == 2 && !$mobile.able()) ||
            (options.style == 3 && !$pc.able())
          )
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/qrLgn/bindQrLoginUser',
                'post',
                uri,
                'WB',
                '{"qrId":"' + $item.convert(options.data.qrId) + '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('qrcommon', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/qrLgn/bindQrLoginUser',
                  'post',
                  uri,
                  'H5',
                  '{"qrId":"' +
                    $item.convert(options.data.qrId) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          } else if (options.style == 3 && $pc.able()) {
            $pc.get('qrcommon', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/qrLgn/bindQrLoginUser',
                  'post',
                  uri,
                  'H5',
                  '{"qrId":"' +
                    $item.convert(options.data.qrId) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          } else if (options.style == 4)
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/qrLgn/bindQrLoginUser',
                'post',
                uri,
                'H5',
                '{"qrId":"' +
                  $item.convert(options.data.qrId) +
                  '","wupData":"' +
                  $item.convert(options.data.wupData) +
                  '"}'
              )
            );
        },
        /**
         * @description 取消
         * @param {number} action - 登出后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
         * @param {number} style - 登出方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录：WAP端，3：PC JSSDK登录，4：TV端），缺省=1
         * @param {string} busiurl - action=2，登出后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
         * @param {string} data.qrId - 二维码ID
         * @param {*} success - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"70009","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"","passport":"","version":"","biztoken":"","status":0,"nickName":"","domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
         * @param {*} error - 登录登出回调方法，style=1有效,response：JSON格式{"uri":"70010","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
         * @example 登录登出：
         * HyUDBWebSDK.Login.V2.QrCode.cancel({
         *		action:1,
         *		style:1,
         *		data:{
         *			qrId:'08613600000000'
         *		},
         *		error:function(response){},
         *		success:function(response){},
         * });
         */
        cancel: function (options) {
          var uri = '70009',
            $this = this,
            $parents = $this.$parent.$parent.$parent,
            $mobile = $this.$mobile,
            $pc = $this.$pc,
            $message = $this.$message,
            $global = $this.$global,
            $item = $this.$item;
          options = $parents.Util.store(uri, $parents, options);
          if (
            options.style == 1 ||
            (options.style == 2 && !$mobile.able()) ||
            (options.style == 3 && !$pc.able())
          )
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/qrLgn/cancelLogin',
                'post',
                uri,
                'WB',
                '{"qrId":"' + $item.convert(options.data.qrId) + '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('qrcommon', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/qrLgn/cancelLogin',
                  'post',
                  uri,
                  'H5',
                  '{"qrId":"' +
                    $item.convert(options.data.qrId) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          } else if (options.style == 3 && $pc.able()) {
            $pc.get('qrcommon', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/qrLgn/cancelLogin',
                  'post',
                  uri,
                  'H5',
                  '{"qrId":"' +
                    $item.convert(options.data.qrId) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          } else if (options.style == 4)
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/qrLgn/cancelLogin',
                'post',
                uri,
                'H5',
                '{"qrId":"' +
                  $item.convert(options.data.qrId) +
                  '","wupData":"' +
                  $item.convert(options.data.wupData) +
                  '"}'
              )
            );
        },
        /**
         * @description 具体扫码能力
         * @param {boolean} code - 具备扫码能力
         * @example
         * HyUDBWebSDK.Login.V2.QrCode.able(code);
         */
        able: function (code) {
          var $this = this;
          if (code != undefined) return ($this.iscode = code);
          return $this.iscode;
        },
        /**
         * @description 二维码图片地址
         * @param {string} qrId - 二维码ID
         * @example
         * HyUDBWebSDK.Login.V2.QrCode.url(qrId);
         */
        url: function (qrId) {
          var $this = this,
            $global = $this.$global;
          return (
            $global.protocol +
            '://' +
            $global.domainFunc.login +
            '.' +
            $global.domain +
            '/qrLgn/getQrImg?k=' +
            qrId
          );
        }
      }),
      /**
       * @description sms对象，对外提供虎牙短信登录常用code,phone等方法
       */
      Sms: (prototype = {
        /**
         * @description 初始化实例对象
         * @param {object} $this - 传递父对象
         * @example
         * HyUDBWebSDK.Login.V2.Sms.init(this);
         */
        init: function ($this) {
          this.$parent = $this;
          this.$global = $this.$global;
          this.$message = $this.$message;
          this.$mobile = $this.$mobile;
          this.$item = $this.$item;
          this.$resource = $this.$resource;
        },
        /**
         * @description 手机短信登录
         * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
         * @param {number} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
         * @param {string} busiurl - style=1 && action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
         * @param {string} data.phone - 手机号，必填
         * @param {string} data.authcode - 验证码
         * @param {string} data.sessionData - 验证Session
         * @param {number} data.remember - 记住登录状，0：不记住（写会话Cookie），1：记住（写Cookie一周）
         * @param {*} success - 登录成功回调方法，style=1有效,response：JSON格式{"uri":60025,"version":null,"context":null,"returnCode":0,"message":null,"description":null,"data":{"uid":1744730594,"passport":"hyudb_test01","ticket5060":"%%2FDCB%%%2BF1%2FDT3%%%2F","lgnsuc":true,"subUid":0,"regOrigin":0,"version":"1.0","biztoken":"AQCMUddddafffffff","status":0,"strategys":[{"strategy":8,"uid":1744730612,"selectTitle":"手机短信验证码","promptTitle":"手机短信验证码","promptContent":"135***15","dataType":0,"data":null,"promptBoxHigh":0,"promptBoxLength":0}],"sessionData":"+zzUalPTr++bmVpqp84TS++C5EJbtBd74h"}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
         * @param {*} error - 登录失败回调方法，style=1有效,response：JSON格式{"uri":"60026","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
         * @example 手机登录：
         * HyUDBWebSDK.Login.V2.Sms.phone({
         *		action:2,
         *		style:1,
         *		data:{
         *			phone:'08613600000000',
         *			authcode:'23333bc',
         *       	sessionData:'dddfasfsafsdfsdfsdfsdf',
         *			remember:0
         *		},
         *		error:function(response){},
         *		success:function(response){}
         * });
         */
        phone: function (options) {
          var uri = '60025',
            $this = this,
            $parents = $this.$parent.$parent.$parent,
            $mobile = $this.$mobile,
            $message = $this.$message,
            $global = $this.$global,
            $item = $this.$item;
          options = $parents.Util.store(uri, $parents, options);
          if (options.style == 1 || (options.style == 2 && !$mobile.able()))
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/web/v2/smsLogin',
                'post',
                uri,
                'WB',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  '","authcode":"' +
                  $item.convert(options.data.authcode) +
                  '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  ) +
                  '","domainList":"' +
                  $item.convert($global.domainList) +
                  '","remember":"' +
                  $item.convert(options.data.remember, 0) +
                  '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/web/v2/smsLogin',
                  'post',
                  uri,
                  'H5',
                  '{"phone":"' +
                    $item.convert(options.data.phone) +
                    '","authcode":"' +
                    $item.convert(options.data.authcode) +
                    '","sessionData":"' +
                    $item.convert(
                      options.data.hasOwnProperty('sessionData')
                        ? options.data.sessionData
                        : $parents.Cookie.get($global.session)
                    ) +
                    '","domainList":"' +
                    $item.convert($global.domainList) +
                    '","remember":"' +
                    $item.convert(options.data.remember, 0) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          }
        }
      })
    })
  };
  /**
   * @description Register对象，对外提供phone，bind方法
   */
  HyUDBWebSDK.prototype.Register = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Register.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
      this.$global = $this.JSSDK.Global;
      this.$message = $this.Message;
      this.$mobile = $this.Mobile;
      this.$item = $this.Item;
      this.V2.init(this);
    },
    /**
     * @description 手机注册
     * @param {number} action - 注册后的跳转标识（1：注册后跳转默认配置的地址，2：注册成功后，跳转指定的busiurl），缺省=1
     * @param {number} step - 改密步骤（1：一步，2：两步），缺省=1
     * @param {string} style - 注册方式（1：WEB JSSDK注册，2：Mobile WEB H5 JSSDK注册），缺省=1
     * @param {string} busiurl - 注册后的指定跳转链接，style=1 && action=2才能执行跳转，缺省=http://www.huya.com
     * @param {string} data.phone - 手机号码，必填，8-16位数据，第一位以0开始
     * @param {string} data.password - 密码，必填，6-20位字母/数字的组合,不能为全数字
     * @param {string} data.nickName - 昵称，如果有则长度4-20个字符
     * @param {string} data.smsCode - 验证码，分一步找回密码，必传，6位数字
     * @param {string} data.sessionData - 验证码验证成功会话，分两步找回密码，必传，可不填SDK会自动填充
     * @param {string} data.countryCode - 国家代码，2个字符
     * @param {*} success - 注册成功回调方法，response：JSON格式{"uri":"20006","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"108526","passport":"108526hy","version":"1.0","biztoken":"AQCoaF1t1g43qg","status":0,"nickName":"Jack","regOrigin":0,"domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
     * @param {*} error - 注册失败回调方法，response：JSON格式{"uri":"20006","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
     * @example 注册：
     * HyUDBWebSDK.Register.phone({
     *		action:1,
     *		step:1,
     *		style:1,
     *		data:{
     *			phone:'08613600000000',
     *			password:'1ddaadfff',
     *			nickName:'虎牙测试',
     *			smsCode:'12333',
     *			sessionData:'sdfkasdfljsadkfjsdlfjsadlkfjasdlkfjasdlfkasdjflksadfjlasdkfjasdlkfjasdlkfjasdfsdjfsdkfsld',
     *			countryCode:'86'
     *		},
     *		success:function(response){},
     *		error:function(response){}
     * });
     */
    phone: function (options) {
      var uri = '20005',
        $this = this,
        $parent = $this.$parent,
        $mobile = $this.$mobile,
        $message = $this.$message,
        $global = $this.$global,
        $item = $this.$item;
      options = $parent.Util.store(uri, $parent, options, 2);
      if (options.style == 1 || (options.style == 2 && !$mobile.able()))
        $message.send(
          'udb_exchangereg' + $global.session,
          $message.encode(
            $global.protocol +
              '://' +
              $global.domainFunc.register +
              '.' +
              $global.domain +
              '/web/mobileReg',
            'post',
            uri,
            'WB',
            '{"phone":"' +
              $item.convert(options.data.phone) +
              '","password":"' +
              $item.convert(options.data.password) +
              (options.data.hasOwnProperty('nickName')
                ? '","nickName":"' + $item.convert(options.data.nickName)
                : '') +
              (options.step == 1
                ? '","smsCode":"' + $item.convert(options.data.smsCode)
                : '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parent.Cookie.get($global.session)
                  )) +
              '","countryCode":"' +
              $item.convert(options.data.countryCode) +
              '","domainList":"' +
              $item.convert($global.domainList) +
              '"}'
          )
        );
      else if (options.style == 2 && $mobile.able()) {
        $mobile.get('common', function (response) {
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/wup/mobileReg',
              'post',
              uri,
              'H5',
              '{"phone":"' +
                $item.convert(options.data.phone) +
                '","password":"' +
                $item.convert(options.data.password) +
                (options.data.hasOwnProperty('nickName')
                  ? '","nickName":"' + $item.convert(options.data.nickName)
                  : '') +
                (options.step == 1
                  ? '","smsCode":"' + $item.convert(options.data.smsCode)
                  : '","sessionData":"' +
                    $item.convert(
                      options.data.hasOwnProperty('sessionData')
                        ? options.data.sessionData
                        : $parent.Cookie.get($global.session)
                    )) +
                '","countryCode":"' +
                $item.convert(options.data.countryCode) +
                '","domainList":"' +
                $item.convert($global.domainList) +
                '","wupData":"' +
                $item.convert(response) +
                '"}'
            )
          );
        });
      }
    },
    /**
     * @description 绑定帐号
     * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
     * @param {string} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
     * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
     * @param {string} data.phone - 手机号码，必填，8-16位数据，第一位以0开始
     * @param {string} data.password - 密码，必填，6-20位字母/数字的组合,不能为全数字
     * @param {string} data.smsCode - 验证码，必传，6位数字
     * @param {string} data.sessionData - 验证码发送成功会话，可不填SDK会自动填充
     * @param {*} success - 绑定帐号成功回调方法，response：JSON格式{"uri":"10012","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"108526","passport":"108526hy","version":"1.0","biztoken":"AQCoaF1t1g43qg","status":0,"nickName":"Jack","regOrigin":0,"domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
     * @param {*} error - 绑定帐号失败回调方法，response：JSON格式{"uri":"10012","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
     * @example 绑定：
     * HyUDBWebSDK.Register.bind({
     *		action:1,
     *		style:1,
     *		data:{
     *			phone:'08613600000000',
     *			password:'1ddaadfff',
     *			smsCode:'12333',
     *			sessionData:'sdfkasdfljsadkfjsdlfjsadlkfjasdlkfjasdlfkasdjflksadfjlasdkfjasdlkfjasdlkfjasdfsdjfsdkfsld'
     *		},
     *		success:function(response){},
     *		error:function(response){}
     * });
     */
    bind: function (options) {
      var uri = '10011',
        $this = this,
        $parent = $this.$parent,
        $mobile = $this.$mobile,
        $message = $this.$message,
        $global = $this.$global,
        $item = $this.$item;
      options = $parent.Util.store(uri, $parent, options);
      if (options.style == 1 || (options.style == 2 && !$mobile.able()))
        $message.send(
          'udb_exchangereg' + $global.session,
          $message.encode(
            $global.protocol +
              '://' +
              $global.domainFunc.register +
              '.' +
              $global.domain +
              '/web/bindMobile',
            'post',
            uri,
            'WB',
            '{"phone":"' +
              $item.convert(options.data.phone) +
              '","password":"' +
              $item.convert(options.data.password) +
              '","smsCode":"' +
              $item.convert(options.data.smsCode) +
              '","sessionData":"' +
              $item.convert(
                options.data.hasOwnProperty('sessionData')
                  ? options.data.sessionData
                  : $parent.Cookie.get($global.session)
              ) +
              '","domainList":"' +
              $item.convert($global.domainList) +
              '"}'
          )
        );
      else if (options.style == 2 && $mobile.able()) {
        $mobile.get('common', function (response) {
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/wup/bindMobile',
              'post',
              uri,
              'H5',
              '{"phone":"' +
                $item.convert(options.data.phone) +
                '","password":"' +
                $item.convert(options.data.password) +
                '","smsCode":"' +
                $item.convert(options.data.smsCode) +
                '","sessionData":"' +
                $item.convert(
                  options.data.hasOwnProperty('sessionData')
                    ? options.data.sessionData
                    : $parent.Cookie.get($global.session)
                ) +
                '","domainList":"' +
                $item.convert($global.domainList) +
                '","wupData":"' +
                $item.convert(response) +
                '"}'
            )
          );
        });
      }
    },
    /**
     * @description 获取绑定手机掩码
     * @param {string} data.uid - 用户的uid,cookie里面取
     * @param {*} success - 获取绑定手机成功回调方法，response：JSON格式{"uri":"10012","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"mobile":"xxxxx"}}，
     * @param {*} error - 获取绑定手机失败回调方法
     * @example 获取绑定手机掩码：
     * HyUDBWebSDK.Register.getMobileMask({
     *		data:{
     *			uid:'123456'
     *		},
     *		success:function(response){},
     *		error:function(response){}
     * });
     */
    getMobileMask: function (options) {
      var uri = '70013';
      var $this = this;
      var $parent = $this.$parent;
      var $mobile = $this.$mobile;
      var $message = $this.$message;
      var $global = $this.$global;
      var $item = $this.$item;
      options = $parent.Util.store(uri, $parent, options);

      if (options.style == 1 || (options.style == 2 && !$mobile.able())) {
        $message.send(
          'udb_exchangereg' + $global.session,
          $message.encode(
            $global.protocol +
              '://' +
              $global.domainFunc.register +
              '.' +
              $global.domain +
              '/web/getMobileMask',
            'post',
            uri,
            'WB',
            '{"uid":"' +
              $item.convert(
                options.hasOwnProperty('data') &&
                  options.data.hasOwnProperty('uid')
                  ? options.data.uid
                  : $parent.Cookie.get('udb_uid')
              ) +
              '"}'
          )
        );
      } else if (options.style == 2 && $mobile.able()) {
        $mobile.get('common', function (response) {
          params.wupData = $item.convert(response);

          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/web/getMobileMask',
              'post',
              uri,
              'H5',
              '{"uid":"' +
                $item.convert(
                  options.hasOwnProperty('data') &&
                    options.data.hasOwnProperty('uid')
                    ? options.data.uid
                    : $parent.Cookie.get('udb_uid')
                ) +
                '","wupData":"' +
                $item.convert(response) +
                '"}'
            )
          );
        });
      }
    },
    /**
     * @description V2对象，对外提供虎牙注册等方法
     */
    V2: (prototype = {
      /**
       * @description 初始化实例对象
       * @param {object} $this - 传递父对象
       * @example
       * HyUDBWebSDK.Register.V2.init(this);
       */
      init: function ($this) {
        this.$parent = $this;
        this.$global = $this.$global;
        this.$message = $this.$message;
        this.$mobile = $this.$mobile;
        this.$item = $this.$item;
      },
      /**
       * @description 手机注册
       * @param {number} action - 注册后的跳转标识（1：注册后跳转默认配置的地址，2：注册成功后，跳转指定的busiurl），缺省=1
       * @param {number} step - 改密步骤（1：一步，2：两步），缺省=1
       * @param {string} style - 注册方式（1：WEB JSSDK注册，2：Mobile WEB H5 JSSDK注册），缺省=1
       * @param {string} mobcall - 回调端，缺省=1
       * @param {string} busiurl - 注册后的指定跳转链接，style=1 && action=2才能执行跳转，缺省=http://www.huya.com
       * @param {string} data.phone - 手机号码，必填，8-16位数据，第一位以0开始
       * @param {string} data.password - 密码，必填，6-20位字母/数字的组合,不能为全数字
       * @param {string} data.nickName - 昵称，如果有则长度4-20个字符
       * @param {string} data.smsCode - 验证码，分一步找回密码，必传，6位数字
       * @param {string} data.sessionData - 验证码验证成功会话，分两步找回密码，必传，可不填SDK会自动填充
       * @param {string} data.track.biz - 业务，如H5/游戏
       * @param {string} data.track.source - 来源，如百度/新浪等
       * @param {string} data.track.channel - 渠道，如来源下的某个渠道
       * @param {*} success - 注册成功回调方法，response：JSON格式{"uri":"60001","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"108526","passport":"108526hy","version":"1.0","biztoken":"AQCoaF1t1g43qg","status":0,"nickName":"Jack","regOrigin":0,"domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
       * @param {*} error - 注册失败回调方法，response：JSON格式{"uri":"60002","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example 注册：
       * HyUDBWebSDK.Register.V2.phone({
       *		action:1,
       *		step:1,
       *		style:1,
       *		mobcall:1,
       *		data:{
       *			phone:'08613600000000',
       *			password:'1ddaadfff',
       *			nickName:'虎牙测试',
       *			smsCode:'12333',
       *			sessionData:'sdfkasdfljsadkfjsdlfjsadlkfjasdlkfjasdlfkasdjflksadfjlasdkfjasdlkfjasdlkfjasdfsdjfsdkfsld',
       *			track:{
       *				biz:"hyrev",
       *				source:"wxoa",
       *				channel:"各自微信公众号"
       *			}
       *		},
       *		success:function(response){},
       *		error:function(response){}
       * });
       */
      phone: function (options) {
        var uri = '60001',
          $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $message = $this.$message,
          $global = $this.$global,
          $item = $this.$item;
        options = $parents.Util.store(uri, $parents, options, 2);
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                (options.step == 1 ? '/web/v2/mobileReg' : '/web/v2/tokenReg'),
              'post',
              uri,
              'WB',
              '{"phone":"' +
                $item.convert(options.data.phone) +
                '","password":"' +
                $item.convert(options.data.password) +
                (options.data.hasOwnProperty('nickName')
                  ? '","nickName":"' + $item.convert(options.data.nickName)
                  : '') +
                (options.step == 1
                  ? '","smsCode":"' + $item.convert(options.data.smsCode)
                  : '') +
                '","sessionData":"' +
                $item.convert(
                  options.data.hasOwnProperty('sessionData')
                    ? options.data.sessionData
                    : $parents.Cookie.get($global.session)
                ) +
                '","domainList":"' +
                $item.convert($global.domainList) +
                '"' +
                (options.data.hasOwnProperty('track')
                  ? (options.data.track.hasOwnProperty('biz')
                      ? ',"biz":"' + $item.convert(options.data.track.biz) + '"'
                      : '') +
                    (options.data.track.hasOwnProperty('source')
                      ? ',"source":"' +
                        $item.convert(options.data.track.source) +
                        '"'
                      : '') +
                    (options.data.track.hasOwnProperty('channel')
                      ? ',"channel":"' +
                        $item.convert(options.data.track.channel) +
                        '"'
                      : '')
                  : '') +
                '}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  (options.step == 1
                    ? '/wup/v2/mobileReg'
                    : '/wup/v2/tokenReg'),
                'post',
                uri,
                'H5',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  '","password":"' +
                  $item.convert(options.data.password) +
                  (options.data.hasOwnProperty('nickName')
                    ? '","nickName":"' + $item.convert(options.data.nickName)
                    : '') +
                  (options.step == 1
                    ? '","smsCode":"' + $item.convert(options.data.smsCode)
                    : '') +
                  '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  ) +
                  '","domainList":"' +
                  $item.convert($global.domainList) +
                  '"' +
                  (options.data.hasOwnProperty('track')
                    ? (options.data.track.hasOwnProperty('biz')
                        ? ',"biz":"' +
                          $item.convert(options.data.track.biz) +
                          '"'
                        : '') +
                      (options.data.track.hasOwnProperty('source')
                        ? ',"source":"' +
                          $item.convert(options.data.track.source) +
                          '"'
                        : '') +
                      (options.data.track.hasOwnProperty('channel')
                        ? ',"channel":"' +
                          $item.convert(options.data.track.channel) +
                          '"'
                        : '')
                    : '') +
                  ',"wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      },
      /**
       * @description 设置资料
       * @param {number} action - 注册后的跳转标识（1：注册后跳转默认配置的地址，2：注册成功后，跳转指定的busiurl），缺省=1
       * @param {string} style - 注册方式（1：WEB JSSDK注册，2：Mobile WEB H5 JSSDK注册），缺省=1
       * @param {string} busiurl - 注册后的指定跳转链接，style=1 && action=2才能执行跳转，缺省=http://www.huya.com
       * @param {string} data.nickName - 昵称，如果有则长度4-20个字符
       * @param {string} data.sex - 性别
       * @param {string} data.image - 头像
       * @param {string} data.sessionData - 验证码验证成功会话，分两步找回密码，必传，可不填SDK会自动填充
       * @param {*} success - 注册成功回调方法，response：JSON格式{"uri":"60021","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"uid":"108526","passport":"108526hy","version":"1.0","biztoken":"AQCoaF1t1g43qg","status":0,"nickName":"Jack","regOrigin":0,"domainUrlList":[]}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
       * @param {*} error - 注册失败回调方法，response：JSON格式{"uri":"60022","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example 设置资料：
       * HyUDBWebSDK.Register.V2.info({
       *		action:1,
       *		style:1,
       *		data:{
       *			nickName:'虎牙测试',
       *			sex:'0',
       *			image:'',
       *			sessionData:'sdfkasdfljsadkfjsdlfjsadlkfjasdlkfjasdlfkasdjflksadfjlasdkfjasdlkfjasdlkfjasdfsdjfsdkfsld'
       *		},
       *		success:function(response){},
       *		error:function(response){}
       * });
       */
      info: function (options) {
        var uri = '60021',
          $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $message = $this.$message,
          $global = $this.$global,
          $item = $this.$item;
        options = $parents.Util.store(uri, $parents, options, 2);
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/web/nickname/upload',
              'post',
              uri,
              'WB',
              '{"nickName":"' +
                $item.convert(options.data.nickName) +
                '","gender":"' +
                $item.convert(options.data.sex) +
                '","avatar":"' +
                $item.convert(options.data.image) +
                '","sessionData":"' +
                $item.convert(
                  options.data.hasOwnProperty('sessionData')
                    ? options.data.sessionData
                    : $parents.Cookie.get($global.session)
                ) +
                '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/wup/nickname/upload',
                'post',
                uri,
                'H5',
                '{"nickName":"' +
                  $item.convert(options.data.nickName) +
                  '","gender":"' +
                  $item.convert(options.data.sex) +
                  '","avatar":"' +
                  $item.convert(options.data.image) +
                  '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  ) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      }
    })
  };
  /**
   * @description Code对象，对外提供send，verify方法
   */
  HyUDBWebSDK.prototype.Code = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Code.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
      this.$global = $this.JSSDK.Global;
      this.$message = $this.Message;
      this.$mobile = $this.Mobile;
      this.$item = $this.Item;
      this.V2.init(this);
      this.Security.init(this);
    },
    /**
     * @description 发送验证码
     * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
     * @param {number} type - 验证码类型（1：短信注册，2：短信找密码，3：短信修改密码，4：短信邦定密码），缺省=1
     * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
     * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
     * @param {string} data.phone - 手机号码，type=1、2必填，8-16位数据，第一位以0开始；=3不填
     * @param {*} success - 发送验证码成功回调方法，response：JSON格式{"uri":"20010","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":""}
     * @param {*} error - 发送验证码失败回调方法，response：JSON格式{"uri":"20010","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
     * @example 发送注册短信
     * HyUDBWebSDK.Code.send({
     *		action:1,
     *		type:1,
     *		style:1,
     *		data:{
     *			phone:'08613600000000'
     *		},
     *		success:function(response){},
     *		error:function(response){}
     * });
     */
    send: function (options) {
      var uri = '20009',
        $this = this,
        $parent = $this.$parent,
        $mobile = $this.$mobile,
        $message = $this.$message,
        $global = $this.$global,
        $item = $this.$item;
      options = $parent.Util.store(uri, $parent, options, 3);
      if (options.type == 1) {
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/sms/send/reg',
              'post',
              uri,
              'WB',
              '{"phone":"' + $item.convert(options.data.phone) + '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/send/reg',
                'post',
                uri,
                'H5',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      } else if (options.type == 2) {
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/sms/send/findPsw',
              'post',
              uri,
              'WB',
              '{"phone":"' + $item.convert(options.data.phone) + '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/send/findPsw',
                'post',
                uri,
                'H5',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      } else if (options.type == 3) {
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/sms/send/changePsw',
              'post',
              uri,
              'WB',
              '{"phone":"' + $item.convert(options.data.phone) + '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/send/changePsw',
                'post',
                uri,
                'H5',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      } else if (options.type == 4) {
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/sms/send/bind',
              'post',
              uri,
              'WB',
              '{"phone":"' + $item.convert(options.data.phone) + '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/send/bind',
                'post',
                uri,
                'H5',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      }
    },
    /**
     * @description 验证验证码
     * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
     * @param {number} type - 验证码类型（1：短信注册，2：短信找密码，3：短信修改密码），缺省=1
     * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
     * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
     * @param {string} data.smsCode - 验证码，6位数字
     * @param {string} data.phone - 手机号码，type=1、2必填，8-16位数据，第一位以0开始；=3不填
     * @param {*} success - 验证验证码成功回调方法，response：JSON格式{"uri":"20012","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"sessionData":"0AEkNlpGbIAckSKD8d9WeXgSKkrlQ7XRAqCEJ5F4vUY3SPcpx8UhNtHnlzBG7XDN+qlH6Hl5C01GDBqk0wu7eImz4gwR9Ta+OxkwQQWaz0wDnHnEoO0477taoBUyj3CeP"}}
     * @param {*} error - 验证验证码失败回调方法，response：JSON格式{"uri":"20012","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
     * @example 验证验证码：
     * HyUDBWebSDK.Code.verify({
     *		action:1,
     *		type:1,
     *		style:1,
     *		data:{
     *			smsCode:'12333',
     *			phone:'08613600000000'
     *		},
     *		success:function(response){},
     *		error:function(response){}
     * });
     */
    verify: function (options) {
      var uri = '20011',
        $this = this,
        $parent = $this.$parent,
        $mobile = $this.$mobile,
        $message = $this.$message,
        $global = $this.$global,
        $item = $this.$item;
      options = $parent.Util.store(uri, $parent, options, 3);
      if (options.type == 1) {
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/sms/verify/reg',
              'post',
              uri,
              'WB',
              '{"phone":"' +
                $item.convert(options.data.phone) +
                '","smsCode":"' +
                $item.convert(options.data.smsCode) +
                '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/verify/reg',
                'post',
                uri,
                'H5',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  '","smsCode":"' +
                  $item.convert(options.data.smsCode) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      } else if (options.type == 2) {
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/sms/verify/findPsw',
              'post',
              uri,
              'WB',
              '{"phone":"' +
                $item.convert(options.data.phone) +
                '","smsCode":"' +
                $item.convert(options.data.smsCode) +
                '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/verify/findPsw',
                'post',
                uri,
                'H5',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  '","smsCode":"' +
                  $item.convert(options.data.smsCode) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      } else if (options.type == 3) {
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/sms/verify/changePsw',
              'post',
              uri,
              'WB',
              '{"smsCode":"' + $item.convert(options.data.smsCode) + '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/verify/changePsw',
                'post',
                uri,
                'H5',
                '{"smsCode":"' +
                  $item.convert(options.data.smsCode) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      }
    },
    /**
     * @description V2对象，对外提供短信、验证等方法
     */
    V2: (prototype = {
      /**
       * @description 初始化实例对象
       * @param {object} $this - 传递父对象
       * @example
       * HyUDBWebSDK.Code.V2.init(this);
       */
      init: function ($this) {
        this.$parent = $this;
        this.$global = $this.$global;
        this.$message = $this.$message;
        this.$mobile = $this.$mobile;
        this.$item = $this.$item;
        this.Sms.init(this);
      },
      /**
       * @description 发送验证码
       * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
       * @param {number} type - 验证码类型（1：短信注册，2：短信找密码，3：短信修改密码，4：短信邦定密码），缺省=1
       * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
       * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
       * @param {string} data.phone - 手机号码，type=1、2必填，8-16位数据，第一位以0开始；=3不填
       * @param {*} success - 发送验证码成功回调方法，response：JSON格式{"uri":"60003","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":""}
       * @param {*} error - 发送验证码失败回调方法，response：JSON格式{"uri":"60004","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example 发送注册短信
       * HyUDBWebSDK.Code.V2.send({
       *		action:1,
       *		type:1,
       *		style:1,
       *		data:{
       *			phone:'08613600000000'
       *		},
       *		success:function(response){},
       *		error:function(response){}
       * });
       */
      send: function (options) {
        var uri = '60003',
          $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $message = $this.$message,
          $global = $this.$global,
          $item = $this.$item;
        options = $parents.Util.store(uri, $parents, options, 3);
        if (options.type == 1) {
          if (options.style == 1 || (options.style == 2 && !$mobile.able()))
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/v2/send/reg',
                'post',
                uri,
                'WB',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  (options.data.hasOwnProperty('authcode') &&
                  !$item.isempty(options.data.authcode)
                    ? '","authCode":"' + $item.convert(options.data.authcode)
                    : '') +
                  ((options.data.hasOwnProperty('sessionData') ||
                    $parents.Cookie.get($global.session) != undefined) &&
                  !$item.isempty(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  )
                    ? '","sessionData":"' +
                      $item.convert(
                        options.data.hasOwnProperty('sessionData')
                          ? options.data.sessionData
                          : $parents.Cookie.get($global.session)
                      )
                    : '') +
                  '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $message.send(
                'udb_exchangereg' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.register +
                    '.' +
                    $global.domain +
                    '/sms/v2/send/reg',
                  'post',
                  uri,
                  'H5',
                  '{"phone":"' +
                    $item.convert(options.data.phone) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          }
        } else if (options.type == 2) {
          if (options.style == 1 || (options.style == 2 && !$mobile.able()))
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/v2/send/findPsw',
                'post',
                uri,
                'WB',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  ) +
                  '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $message.send(
                'udb_exchangereg' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.register +
                    '.' +
                    $global.domain +
                    '/sms/v2/send/findPsw',
                  'post',
                  uri,
                  'H5',
                  '{"phone":"' +
                    $item.convert(options.data.phone) +
                    '","sessionData":"' +
                    $item.convert(
                      options.data.hasOwnProperty('sessionData')
                        ? options.data.sessionData
                        : $parents.Cookie.get($global.session)
                    ) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          }
        } else if (options.type == 3) {
          if (options.style == 1 || (options.style == 2 && !$mobile.able()))
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/v2/send/changePsw',
                'post',
                uri,
                'WB',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  ) +
                  '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $message.send(
                'udb_exchangereg' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.register +
                    '.' +
                    $global.domain +
                    '/sms/v2/send/changePsw',
                  'post',
                  uri,
                  'H5',
                  '{"phone":"' +
                    $item.convert(options.data.phone) +
                    '","sessionData":"' +
                    $item.convert(
                      options.data.hasOwnProperty('sessionData')
                        ? options.data.sessionData
                        : $parents.Cookie.get($global.session)
                    ) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          }
        }
      },
      /**
       * @description 验证验证码
       * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
       * @param {number} type - 验证码类型（1：短信注册，2：短信找密码，3：短信修改密码），缺省=1
       * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
       * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
       * @param {string} data.smsCode - 验证码，6位数字
       * @param {string} data.phone - 手机号码，type=1、2必填，8-16位数据，第一位以0开始；=3不填
       * @param {string} data.sessionData - 发送验证码验证成功会话，必传，可不填SDK会自动填充
       * @param {*} success - 验证验证码成功回调方法，response：JSON格式{"uri":"60005","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"sessionData":"0AEkNlpGbIAckSKD8d9WeXgSKkrlQ7XRAqCEJ5F4vUY3SPcpx8UhNtHnlzBG7XDN+qlH6Hl5C01GDBqk0wu7eImz4gwR9Ta+OxkwQQWaz0wDnHnEoO0477taoBUyj3CeP"}}
       * @param {*} error - 验证验证码失败回调方法，response：JSON格式{"uri":"60006","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example 验证验证码：
       * HyUDBWebSDK.Code.V2.verify({
       *		action:1,
       *		type:1,
       *		style:1,
       *		data:{
       *			smsCode:'12333',
       *			phone:'08613600000000',
       *			sessionData:'sdfkasdfljsadkfjsdlfjsadlkfjasdlkfjasdlfkasdjflksadfjlasdkfjasdlkfjasdlkfjasdfsdjfsdkfsld'
       *		},
       *		success:function(response){},
       *		error:function(response){}
       * });
       */
      verify: function (options) {
        var uri = '60005',
          $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $message = $this.$message,
          $global = $this.$global,
          $item = $this.$item;
        options = $parents.Util.store(uri, $parents, options, 3);
        if (options.type == 1) {
          if (options.style == 1 || (options.style == 2 && !$mobile.able()))
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/v2/verify/reg',
                'post',
                uri,
                'WB',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  '","smsCode":"' +
                  $item.convert(options.data.smsCode) +
                  '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  ) +
                  '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $message.send(
                'udb_exchangereg' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.register +
                    '.' +
                    $global.domain +
                    '/sms/v2/verify/reg',
                  'post',
                  uri,
                  'H5',
                  '{"phone":"' +
                    $item.convert(options.data.phone) +
                    '","smsCode":"' +
                    $item.convert(options.data.smsCode) +
                    '","sessionData":"' +
                    $item.convert(
                      options.data.hasOwnProperty('sessionData')
                        ? options.data.sessionData
                        : $parents.Cookie.get($global.session)
                    ) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          }
        } else if (options.type == 2) {
          if (options.style == 1 || (options.style == 2 && !$mobile.able()))
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/v2/verify/findPsw',
                'post',
                uri,
                'WB',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  '","smsCode":"' +
                  $item.convert(options.data.smsCode) +
                  '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  ) +
                  '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $message.send(
                'udb_exchangereg' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.register +
                    '.' +
                    $global.domain +
                    '/sms/v2/verify/findPsw',
                  'post',
                  uri,
                  'H5',
                  '{"phone":"' +
                    $item.convert(options.data.phone) +
                    '","smsCode":"' +
                    $item.convert(options.data.smsCode) +
                    '","sessionData":"' +
                    $item.convert(
                      options.data.hasOwnProperty('sessionData')
                        ? options.data.sessionData
                        : $parents.Cookie.get($global.session)
                    ) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          }
        } else if (options.type == 3) {
          if (options.style == 1 || (options.style == 2 && !$mobile.able()))
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/v2/verify/changePsw',
                'post',
                uri,
                'WB',
                '{"smsCode":"' +
                  $item.convert(options.data.smsCode) +
                  '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  ) +
                  '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $message.send(
                'udb_exchangereg' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.register +
                    '.' +
                    $global.domain +
                    '/sms/v2/verify/changePsw',
                  'post',
                  uri,
                  'H5',
                  '{"smsCode":"' +
                    $item.convert(options.data.smsCode) +
                    '","sessionData":"' +
                    $item.convert(
                      options.data.hasOwnProperty('sessionData')
                        ? options.data.sessionData
                        : $parents.Cookie.get($global.session)
                    ) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          }
        }
      },
      /**
       * @description sms对象，对外提供虎牙短信验证码常用send等方法
       */
      Sms: (prototype = {
        /**
         * @description 初始化实例对象
         * @param {object} $this - 传递父对象
         * @example
         * HyUDBWebSDK.Code.V2.Sms.init(this);
         */
        init: function ($this) {
          this.$parent = $this;
          this.$global = $this.$global;
          this.$message = $this.$message;
          this.$mobile = $this.$mobile;
          this.$item = $this.$item;
          this.$resource = $this.$resource;
        },
        /**
         * @description 发送验证码
         * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
         * @param {number} type - 验证码类型（1：短信注册，2：短信找密码，3：短信修改密码，4：短信邦定密码），缺省=1
         * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
         * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
         * @param {string} data.phone - 手机号码，type=1、2必填，8-16位数据，第一位以0开始；=3不填
         * @param {*} success - 发送验证码成功回调方法，response：JSON格式{"uri":"60027","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":""}
         * @param {*} error - 发送验证码失败回调方法，response：JSON格式{"uri":"60028","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
         * @example 发送注册短信
         * HyUDBWebSDK.Code.V2.Sms.send({
         *		action:1,
         *		type:1,
         *		style:1,
         *		data:{
         *			phone:'08613600000000'
         *		},
         *		success:function(response){},
         *		error:function(response){}
         * });
         */
        send: function (options) {
          var uri = '60027',
            $this = this,
            $parents = $this.$parent.$parent.$parent,
            $mobile = $this.$mobile,
            $message = $this.$message,
            $global = $this.$global,
            $item = $this.$item;
          options = $parents.Util.store(uri, $parents, options);
          if (options.style == 1 || (options.style == 2 && !$mobile.able()))
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/web/v2/smsCode',
                'post',
                uri,
                'WB',
                '{"phone":"' + $item.convert(options.data.phone) + '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/web/v2/smsCode',
                  'post',
                  uri,
                  'H5',
                  '{"phone":"' +
                    $item.convert(options.data.phone) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          }
        }
      })
    }),
    /**
     * @description 验证安全防刷
     */
    Security: (prototype = {
      /**
       * @description 初始化实例对象
       * @param {object} $this - 传递父对象
       * @example
       * HyUDBWebSDK.Code.V2.Security.init(this);
       */
      init: function ($this) {
        this.$parent = $this;
        this.$global = $this.$global;
        this.$message = $this.$message;
        this.$mobile = $this.$mobile;
        this.$item = $this.$item;
      },
      /**
       * @description 刷新防刷图片验证码
       * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
       * @param {number} type - 验证码类型（1：短信注册，2：短信找密码，3：短信修改密码，4：短信邦定密码），缺省=1
       * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
       * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
       * @param {string} data.sessionData - 刷新图片验证码验证成功会话，必传，可不填SDK会自动填充
       * @param {*} success - 发送验证码成功回调方法，response：JSON格式{"uri":"60023","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":""}
       * @param {*} error - 发送验证码失败回调方法，response：JSON格式{"uri":"60024","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example 发送注册短信
       * HyUDBWebSDK.Code.Security.image({
       *		action:1,
       *		type:1,
       *		style:1,
       *		data:{
       *			sessionData:'sdfkasdfljsadkfjsdlfjsadlkfjasdlkfjasdlfkasdjflksadfjlasdkfjasdlkfjasdlkfjasdfsdjfsdkfsld'
       *		},
       *		success:function(response){},
       *		error:function(response){}
       * });
       */
      image: function (options) {
        var uri = '60023',
          $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $message = $this.$message,
          $global = $this.$global,
          $item = $this.$item;
        options = $parents.Util.store(uri, $parents, options, 2);
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/sms/imagecode',
              'post',
              uri,
              'WB',
              '{"sessionData":"' +
                $item.convert(
                  options.hasOwnProperty('data') &&
                    options.data.hasOwnProperty('sessionData')
                    ? options.data.sessionData
                    : $parents.Cookie.get($global.session)
                ) +
                '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/imagecode',
                'post',
                uri,
                'H5',
                '{"sessionData":"' +
                  $item.convert(
                    options.hasOwnProperty('data') &&
                      options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  ) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      }
    })
  };
  /**
   * @description Password对象，对外提供modify，find方法
   */
  HyUDBWebSDK.prototype.Password = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Password.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
      this.$global = $this.JSSDK.Global;
      this.$message = $this.Message;
      this.$mobile = $this.Mobile;
      this.$item = $this.Item;
      this.V2.init(this);
    },
    /**
     * @description 修改密码（注意找回密码成功后除非以前的状态，然后重新登录）
     * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
     * @param {number} step - 改密步骤（1：一步，2：两步），缺省=1
     * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
     * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
     * @param {string} data.password - 重设置的新密码，必填，6-20位字母/数字的组合,不能为全数字
     * @param {string} data.smsCode - 验证码，分一步找回密码，必传,6位数字
     * @param {string} data.sessionData - 验证码验证成功会话，分两步找回密码，必传，可不填SDK会自动填充
     * @param {*} success - 修改密码成功回调方法，response：JSON格式{"uri":"20014","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":""}
     * @param {*} error - 修改密码败回调方法，response：JSON格式{"uri":"20014","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
     * @example 修改密码：
     * HyUDBWebSDK.Password.modify({
     *		action:1,
     *		step:1,
     *		style:1,
     *		data:{
     *			password:'1ddaadfff',
     *			smsCode:'12333',
     *			sessionData:'sdfkasdfljsadkfjsdlfjsadlkfjasdlkfjasdlfkasdjflksadfjlasdkfjasdlkfjasdlkfjasdfsdjfsdkfsld'
     *		},
     *		success:function(response){},
     *		error:function(response){}
     * });
     */
    modify: function (options) {
      var uri = '20013',
        $this = this,
        $parent = $this.$parent,
        $mobile = $this.$mobile,
        $message = $this.$message,
        $global = $this.$global,
        $item = $this.$item;
      options = $parent.Util.store(uri, $parent, options, 2);
      if (options.style == 1 || (options.style == 2 && !$mobile.able()))
        $message.send(
          'udb_exchangereg' + $global.session,
          $message.encode(
            $global.protocol +
              '://' +
              $global.domainFunc.register +
              '.' +
              $global.domain +
              '/web/changePswBySms',
            'post',
            uri,
            'WB',
            '{"password":"' +
              $item.convert(options.data.password) +
              (options.step == 1
                ? '","smsCode":"' + $item.convert(options.data.smsCode)
                : '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parent.Cookie.get($global.session)
                  )) +
              '"}'
          )
        );
      else if (options.style == 2 && $mobile.able()) {
        $mobile.get('common', function (response) {
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/wup/changePswBySms',
              'post',
              uri,
              'H5',
              '{"password":"' +
                $item.convert(options.data.password) +
                (options.step == 1
                  ? '","smsCode":"' + $item.convert(options.data.smsCode)
                  : '","sessionData":"' +
                    $item.convert(
                      options.data.hasOwnProperty('sessionData')
                        ? options.data.sessionData
                        : $parent.Cookie.get($global.session)
                    )) +
                '","wupData":"' +
                $item.convert(response) +
                '"}'
            )
          );
        });
      }
    },
    /**
     * @description 找回密码（注意找回密码成功后除非以前的状态，然后重新登录）
     * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
     * @param {number} step - 验证码类型（1：一步，2：两步），缺省=1
     * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
     * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
     * @param {string} data.password - 重设置的新密码，必填，6-20位字母/数字的组合,不能为全数字
     * @param {string} data.phone - 验证手机号码，必填，8-16位数据，第一位以0开始
     * @param {string} data.smsCode - 验证码，分一步找回密码，必传，6位数字
     * @param {string} data.sessionData - 验证码验证成功会话，分两步找回密码，必传，可不填SDK会自动填充
     * @param {*} success - 找回密码成功回调方法，response：JSON格式{"uri":"20018","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":""}
     * @param {*} error - 找回密码失败回调方法，response：JSON格式{"uri":"20018","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
     * @example 找回密码：
     * HyUDBWebSDK.Password.find({
     *		action:1,
     *		step:1,
     *		style:1,
     *		data:{
     *			phone:'08613600000000',
     *			password:'1ddaadfff',
     *			smsCode:'12333',
     *			sessionData:'sdfkasdfljsadkfjsdlfjsadlkfjasdlkfjasdlfkasdjflksadfjlasdkfjasdlkfjasdlkfjasdfsdjfsdkfsld'
     *		},
     *		success:function(response){},
     *		error:function(response){}
     * });
     */
    find: function (options) {
      var uri = '20017',
        $this = this,
        $parent = $this.$parent,
        $mobile = $this.$mobile,
        $message = $this.$message,
        $global = $this.$global,
        $item = $this.$item;
      options = $parent.Util.store(uri, $parent, options, 2);
      if (options.style == 1 || (options.style == 2 && !$mobile.able()))
        $message.send(
          'udb_exchangereg' + $global.session,
          $message.encode(
            $global.protocol +
              '://' +
              $global.domainFunc.register +
              '.' +
              $global.domain +
              '/web/findPswBySms',
            'post',
            uri,
            'WB',
            '{"phone":"' +
              $item.convert(options.data.phone) +
              '","password":"' +
              $item.convert(options.data.password) +
              (options.step == 1
                ? '","smsCode":"' + $item.convert(options.data.smsCode)
                : '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parent.Cookie.get($global.session)
                  )) +
              '"}'
          )
        );
      else if (options.style == 2 && $mobile.able()) {
        $mobile.get('common', function (response) {
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/wup/findPswBySms',
              'post',
              uri,
              'H5',
              '{"phone":"' +
                $item.convert(options.data.phone) +
                '","password":"' +
                $item.convert(options.data.password) +
                (options.step == 1
                  ? '","smsCode":"' + $item.convert(options.data.smsCode)
                  : '","sessionData":"' +
                    $item.convert(
                      options.data.hasOwnProperty('sessionData')
                        ? options.data.sessionData
                        : $parent.Cookie.get($global.session)
                    )) +
                '","wupData":"' +
                $item.convert(response) +
                '"}'
            )
          );
        });
      }
    },
    /**
     * @description V2对象，对外提供短信、验证等方法
     */
    V2: (prototype = {
      /**
       * @description 初始化实例对象
       * @param {object} $this - 传递父对象
       * @example
       * HyUDBWebSDK.Password.V2.init(this);
       */
      init: function ($this) {
        this.$parent = $this;
        this.$global = $this.$global;
        this.$message = $this.$message;
        this.$mobile = $this.$mobile;
        this.$item = $this.$item;
        this.Check.init(this);
      },
      /**
       * @description 修改密码（注意找回密码成功后除非以前的状态，然后重新登录）
       * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
       * @param {number} step - 改密步骤（1：一步，2：两步），缺省=1
       * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
       * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
       * @param {string} data.password - 重设置的新密码，必填，6-20位字母/数字的组合,不能为全数字
       * @param {string} data.smsCode - 验证码，分一步找回密码，必传,6位数字
       * @param {string} data.sessionData - 验证码验证成功会话，分两步找回密码，必传，可不填SDK会自动填充
       * @param {*} success - 修改密码成功回调方法，response：JSON格式{"uri":"60007","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":""}
       * @param {*} error - 修改密码败回调方法，response：JSON格式{"uri":"60008","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example 修改密码：
       * HyUDBWebSDK.Password.V2.modify({
       *		action:1,
       *		step:1,
       *		style:1,
       *		data:{
       *			password:'1ddaadfff',
       *			smsCode:'12333',
       *			sessionData:'sdfkasdfljsadkfjsdlfjsadlkfjasdlkfjasdlfkasdjflksadfjlasdkfjasdlkfjasdlkfjasdfsdjfsdkfsld'
       *		},
       *		success:function(response){},
       *		error:function(response){}
       * });
       */
      modify: function (options) {
        var uri = '60007',
          $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $message = $this.$message,
          $global = $this.$global,
          $item = $this.$item;
        options = $parents.Util.store(uri, $parents, options, 2);
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/web/v2/changePswBySms',
              'post',
              uri,
              'WB',
              '{"password":"' +
                $item.convert(options.data.password) +
                (options.step == 1
                  ? '","smsCode":"' + $item.convert(options.data.smsCode)
                  : '') +
                '","sessionData":"' +
                $item.convert(
                  options.data.hasOwnProperty('sessionData')
                    ? options.data.sessionData
                    : $parents.Cookie.get($global.session)
                ) +
                '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/wup/v2/changePswBySms',
                'post',
                uri,
                'H5',
                '{"password":"' +
                  $item.convert(options.data.password) +
                  (options.step == 1
                    ? '","smsCode":"' + $item.convert(options.data.smsCode)
                    : '') +
                  '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  ) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      },
      /**
       * @description 找回密码（注意找回密码成功后除非以前的状态，然后重新登录）
       * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
       * @param {number} step - 验证码类型（1：一步，2：两步），缺省=1
       * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
       * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
       * @param {string} data.password - 重设置的新密码，必填，6-20位字母/数字的组合,不能为全数字
       * @param {string} data.userName - 验证改密码帐号
       * @param {string} data.smsCode - 验证码，分一步找回密码，必传，6位数字
       * @param {string} data.sessionData - 验证码验证成功会话，分两步找回密码，必传，可不填SDK会自动填充
       * @param {*} success - 找回密码成功回调方法，response：JSON格式{"uri":"60009","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":""}
       * @param {*} error - 找回密码失败回调方法，response：JSON格式{"uri":"60010","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example 找回密码：
       * HyUDBWebSDK.Password.V2.find({
       *		action:1,
       *		step:1,
       *		style:1,
       *		data:{
       *			userName:'08613600000000',
       *			password:'1ddaadfff',
       *			smsCode:'12333',
       *			sessionData:'sdfkasdfljsadkfjsdlfjsadlkfjasdlkfjasdlfkasdjflksadfjlasdkfjasdlkfjasdlkfjasdfsdjfsdkfsld'
       *		},
       *		success:function(response){},
       *		error:function(response){}
       * });
       */
      find: function (options) {
        var uri = '60009',
          $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $message = $this.$message,
          $global = $this.$global,
          $item = $this.$item;
        options = $parents.Util.store(uri, $parents, options, 2);
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangereg' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.register +
                '.' +
                $global.domain +
                '/web/v2/findPswBySms',
              'post',
              uri,
              'WB',
              '{"userName":"' +
                $item.convert(options.data.userName) +
                '","password":"' +
                $item.convert(options.data.password) +
                (options.step == 1
                  ? '","smsCode":"' + $item.convert(options.data.smsCode)
                  : '') +
                '","sessionData":"' +
                $item.convert(
                  options.data.hasOwnProperty('sessionData')
                    ? options.data.sessionData
                    : $parents.Cookie.get($global.session)
                ) +
                '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/wup/v2/findPswBySms',
                'post',
                uri,
                'H5',
                '{"userName":"' +
                  $item.convert(options.data.userName) +
                  '","password":"' +
                  $item.convert(options.data.password) +
                  (options.step == 1
                    ? '","smsCode":"' + $item.convert(options.data.smsCode)
                    : '') +
                  '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  ) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      },
      /**
       * @description Check对象，找密、改密检测等方法
       */
      Check: (prototype = {
        /**
         * @description 初始化实例对象
         * @param {object} $this - 传递父对象
         * @example
         * HyUDBWebSDK.Password.V2.init(this);
         */
        init: function ($this) {
          this.$parent = $this;
          this.$global = $this.$global;
          this.$message = $this.$message;
          this.$mobile = $this.$mobile;
          this.$item = $this.$item;
        },
        /**
         * @description 检测改密状态
         * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
         * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
         * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
         * @param {string} data.uid - 改密uid
         * @param {*} success - 修改密码成功回调方法，response：JSON格式{"uri":"60011","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":""}
         * @param {*} error - 修改密码败回调方法，response：JSON格式{"uri":"60012","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
         * @example 修改密码：
         * HyUDBWebSDK.Password.V2.Check.modify({
         *		action:1,
         *		style:1,
         *		data:{
         *			uid:'123456'
         *		},
         *		success:function(response){},
         *		error:function(response){}
         * });
         */
        modify: function (options) {
          var uri = '60011',
            $this = this,
            $parents = $this.$parent.$parent.$parent,
            $mobile = $this.$mobile,
            $message = $this.$message,
            $global = $this.$global,
            $item = $this.$item;
          options = $parents.Util.store(uri, $parents, options, 2);
          if (options.style == 1 || (options.style == 2 && !$mobile.able()))
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/web/v2/modifyPswByCheck',
                'post',
                uri,
                'WB',
                '{"uid":"' +
                  $item.convert(
                    options.hasOwnProperty('data') &&
                      options.data.hasOwnProperty('uid')
                      ? options.data.uid
                      : $parents.Cookie.get('udb_uid')
                  ) +
                  '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $message.send(
                'udb_exchangereg' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.register +
                    '.' +
                    $global.domain +
                    '/wup/v2/modifyPswByCheck',
                  'post',
                  uri,
                  'H5',
                  '{"uid":"' +
                    $item.convert(
                      options.hasOwnProperty('data') &&
                        options.data.hasOwnProperty('uid')
                        ? options.data.uid
                        : $parents.Cookie.get('udb_uid')
                    ) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          }
        },
        /**
         * @description 检测找密状态
         * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
         * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
         * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
         * @param {string} data.userName - 找密帐号
         * @param {*} success - 修改密码成功回调方法，response：JSON格式{"uri":"60013","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":""}
         * @param {*} error - 修改密码败回调方法，response：JSON格式{"uri":"60014","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
         * @example 修改密码：
         * HyUDBWebSDK.Password.V2.Check.find({
         *		action:1,
         *		style:1,
         *		data:{
         *			userName:'1ddaadfff'
         *		},
         *		success:function(response){},
         *		error:function(response){}
         * });
         */
        find: function (options) {
          var uri = '60013',
            $this = this,
            $parents = $this.$parent.$parent.$parent,
            $mobile = $this.$mobile,
            $message = $this.$message,
            $global = $this.$global,
            $item = $this.$item;
          options = $parents.Util.store(uri, $parents, options, 2);
          if (options.style == 1 || (options.style == 2 && !$mobile.able()))
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/web/v2/findPswByCheck',
                'post',
                uri,
                'WB',
                '{"userName":"' + $item.convert(options.data.userName) + '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $message.send(
                'udb_exchangereg' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.register +
                    '.' +
                    $global.domain +
                    '/wup/v2/findPswByCheck',
                  'post',
                  uri,
                  'H5',
                  '{"userName":"' +
                    $item.convert(options.data.userName) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          }
        },
        /**
         * @description 检测手机一致性
         * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
         * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
         * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
         * @param {string} data.phone - 检测手机号码
         * @param {string} data.sessionData - 验证码验证成功会话，分两步找回密码，必传，可不填SDK会自动填充
         * @param {*} success - 修改密码成功回调方法，response：JSON格式{"uri":"60017","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":""}
         * @param {*} error - 修改密码败回调方法，response：JSON格式{"uri":"60018","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
         * @example 修改密码：
         * HyUDBWebSDK.Password.V2.Check.mobile({
         *		action:1,
         *		style:1,
         *		data:{
         *			phone:'08618820037137'
         *			sessionData:'sdfkasdfljsadkfjsdlfjsadlkfjasdlkfjasdlfkasdjflksadfjlasdkfjasdlkfjasdlkfjasdfsdjfsdkfsld'
         *		},
         *		success:function(response){},
         *		error:function(response){}
         * });
         */
        mobile: function (options) {
          var uri = '60017',
            $this = this,
            $parents = $this.$parent.$parent.$parent,
            $mobile = $this.$mobile,
            $message = $this.$message,
            $global = $this.$global,
            $item = $this.$item;
          options = $parents.Util.store(uri, $parents, options, 2);
          if (options.style == 1 || (options.style == 2 && !$mobile.able()))
            $message.send(
              'udb_exchangereg' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.register +
                  '.' +
                  $global.domain +
                  '/sms/v2/checkUidMobileFindPsw',
                'post',
                uri,
                'WB',
                '{"phone":"' +
                  $item.convert(options.data.phone) +
                  '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  ) +
                  '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $message.send(
                'udb_exchangereg' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.register +
                    '.' +
                    $global.domain +
                    '/sms/v2/checkUidMobileFindPsw',
                  'post',
                  uri,
                  'H5',
                  '{"phone":"' +
                    $item.convert(options.data.phone) +
                    '","sessionData":"' +
                    $item.convert(
                      options.data.hasOwnProperty('sessionData')
                        ? options.data.sessionData
                        : $parents.Cookie.get($global.session)
                    ) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          }
        }
      })
    })
  };
  /**
   * @description 策略对象，对外提供方法
   */
  HyUDBWebSDK.prototype.Strategy = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Strategy.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
      this.$global = $this.JSSDK.Global;
      this.$message = $this.Message;
      this.$mobile = $this.Mobile;
      this.$item = $this.Item;
      this.Code.init(this);
    },
    /**
		* @description 短信验证二次认证登录，此认证后不会出现其他策略
		* @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
		* @param {number} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
		* @param {string} busiurl - astyle=1 && action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
		* @param {number} data.strategy - 策略值，策略标识-0：无策略，1：已冻结，2：交互式，4：图片验证码，8：短信验证码，16：手机令牌
		* @param {Long}   data.uid - 登录用户UID，必填
		* @param {String} data.sessionData - 令牌验证码会话数据，必填
		* @param {String} data.authcode - 令牌验证，必填
		* @param {number} data.remember - 记住登录状，0：不记住（写会话Cookie），1：记住（写Cookie一周）
		* @param {*} success - 登录成功回调方法，style=1有效,response：JSON格式{"uri":40003,"version":null,"context":null,"returnCode":0,"message":null,"description":null,"data":{"uid":1744730594,"passport":"hyudb_test01","ticket5060":"%%2FDCB%%%2BF1%2FDT3%%%2F","lgnsuc":true,"subUid":0,"regOrigin":0,"version":"1.0","biztoken":"AQCMUddddafffffff","status":0,"strategys":[{"strategy":8,"uid":1744730612,"selectTitle":"手机短信验证码","promptTitle":"手机短信验证码","promptContent":"135***15","dataType":0,"data":null,"promptBoxHigh":0,"promptBoxLength":0}],"sessionData":"+zzUalPTr++bmVpqp84TS++C5EJbtBd74h"}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
		* @param {*} strategy- 登录过程策略回调方法[{"strategy":8,"uid":1744730612,"selectTitle":"手机短信验证码","promptTitle":"手机短信验证码","promptContent":"135***15","dataType":0,"data":null,"promptBoxHigh":0,"promptBoxLength":0}]
		* @param {*} error - 登录失败回调方法，style=1有效,response：JSON格式{"uri":"40004","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}	
		* @example
		* HyUDBWebSDK.Strategy.sms({
		*	action:1,
		*	style:1,
		* 	data{
		*		strategy:4,
		*		uid:122222,	 
		*		authcode:'23333bc',	 
		*       sessionData:'dddfasfsafsdfsdfsdfsdf',
		*		remember:0
		* 	}
		* 	success:function(response){},
		* 	strategy:function(strategys){},
		* 	error:function(response){}
		});
		*/
    sms: function (options) {
      this.auth('40001', '/web/v2/secondAuthLogin', options);
    },
    /**
		* @description 图片验证码防刷，此认证后还可能出现短信认证策略
		* @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
		* @param {number} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
		* @param {string} busiurl - astyle=1 && action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
		* @param {number} data.strategy - 策略值，策略标识-0：无策略，1：已冻结，2：交互式，4：图片验证码，8：短信验证码，16：手机令牌
		* @param {Long}   data.uid - 登录用户UID，必填
		* @param {String} data.sessionData - 图片验证码会话数据，必填
		* @param {String} data.authcode - 图片验证码验证，必填
		* @param {number} data.remember - 记住登录状，0：不记住（写会话Cookie），1：记住（写Cookie一周）
		* @param {*} success - 登录成功回调方法，style=1有效,response：JSON格式{"uri":40003,"version":null,"context":null,"returnCode":0,"message":null,"description":null,"data":{"uid":1744730594,"passport":"hyudb_test01","ticket5060":"%%2FDCB%%%2BF1%2FDT3%%%2F","lgnsuc":true,"subUid":0,"regOrigin":0,"version":"1.0","biztoken":"AQCMUddddafffffff","status":0,"strategys":[{"strategy":8,"uid":1744730612,"selectTitle":"手机短信验证码","promptTitle":"手机短信验证码","promptContent":"135***15","dataType":0,"data":null,"promptBoxHigh":0,"promptBoxLength":0}],"sessionData":"+zzUalPTr++bmVpqp84TS++C5EJbtBd74h"}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
		* @param {*} strategy- 登录过程策略回调方法[{"strategy":8,"uid":1744730612,"selectTitle":"手机短信验证码","promptTitle":"手机短信验证码","promptContent":"135***15","dataType":0,"data":null,"promptBoxHigh":0,"promptBoxLength":0}]
		* @param {*} error - 登录失败回调方法，style=1有效,response：JSON格式{"uri":"40004","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}	
		* @example
		* HyUDBWebSDK.Strategy.image({
		*	action:1,
		*	style:1,
		* 	data{
		*		strategy:4,
		*		uid:122222,	 
		*		authcode:'23333bc',	 
		*       sessionData:'dddfasfsafsdfsdfsdfsdf',
		*		remember:0
		* 	}
		* 	success:function(response){},
		* 	strategy:function(strategys){},
		* 	error:function(response){}
		});
		*/
    image: function (options) {
      this.auth('40003', '/web/v2/antiViolentLogin', options);
    },
    /**
		* @description 令牌验证二次认证登录，此认证后不会出现其他策略
		* @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
		* @param {number} style - 登陆方式（1：WEB JSSDK登录，2：Mobile WEB JSSDK登录），缺省=1
		* @param {string} busiurl - astyle=1 && action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
		* @param {number} data.strategy - 策略值，策略标识-0：无策略，1：已冻结，2：交互式，4：图片验证码，8：短信验证码，16：手机令牌
		* @param {Long}   data.uid - 登录用户UID，必填
		* @param {String} data.sessionData - 令牌验证码会话数据，必填
		* @param {String} data.authcode - 令牌验证，必填
		* @param {number} data.remember - 记住登录状，0：不记住（写会话Cookie），1：记住（写Cookie一周）
		* @param {*} success - 登录成功回调方法，style=1有效,response：JSON格式{"uri":40005,"version":null,"context":null,"returnCode":0,"message":null,"description":null,"data":{"uid":1744730594,"passport":"hyudb_test01","ticket5060":"%%2FDCB%%%2BF1%2FDT3%%%2F","lgnsuc":true,"subUid":0,"regOrigin":0,"version":"1.0","biztoken":"AQCMUddddafffffff","status":0,"strategys":[{"strategy":8,"uid":1744730612,"selectTitle":"手机短信验证码","promptTitle":"手机短信验证码","promptContent":"135***15","dataType":0,"data":null,"promptBoxHigh":0,"promptBoxLength":0}],"sessionData":"+zzUalPTr++bmVpqp84TS++C5EJbtBd74h"}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
		* @param {*} strategy- 登录过程策略回调方法[{"strategy":8,"uid":1744730612,"selectTitle":"手机短信验证码","promptTitle":"手机短信验证码","promptContent":"135***15","dataType":0,"data":null,"promptBoxHigh":0,"promptBoxLength":0}]
		* @param {*} error - 登录失败回调方法，style=1有效,response：JSON格式{"uri":"40006","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}	
		* @example
		* HyUDBWebSDK.Strategy.token({
		*	action:1,
		*	style:1,
		* 	data{
		*		strategy:16,
		*		uid:122222,	 
		*		authcode:'23333bc',	 
		*       sessionData:'dddfasfsafsdfsdfsdfsdf',
		*		remember:0
		* 	}
		* 	success:function(response){},
		* 	strategy:function(strategys){},
		* 	error:function(response){}
		});
		*/
    token: function (options) {
      this.auth('40005', '/web/v2/secondAuthLogin', options);
    },
    /**
		* @description 二次认证登录
		* @param {string} uri - 认证命令
		* @param {string} url - 认证地址
		* @param {string} options - 认证验证码数据
		* @param {*} success - 登录成功回调方法，style=1有效,response：JSON格式{"uri":10000,"version":null,"context":null,"returnCode":0,"message":null,"description":null,"data":{"uid":1744730594,"passport":"hyudb_test01","ticket5060":"%%2FDCB%%%2BF1%2FDT3%%%2F","lgnsuc":true,"subUid":0,"regOrigin":0,"version":"1.0","biztoken":"AQCMUddddafffffff","status":0,"strategys":[{"strategy":8,"uid":1744730612,"selectTitle":"手机短信验证码","promptTitle":"手机短信验证码","promptContent":"135***15","dataType":0,"data":null,"promptBoxHigh":0,"promptBoxLength":0}],"sessionData":"+zzUalPTr++bmVpqp84TS++C5EJbtBd74h"}}，status表示状态、按位操作，第一位（=1邦定手机号、=0没有绑定）
		* @param {*} strategy- 登录过程策略回调方法[{"strategy":8,"uid":1744730612,"selectTitle":"手机短信验证码","promptTitle":"手机短信验证码","promptContent":"135***15","dataType":0,"data":null,"promptBoxHigh":0,"promptBoxLength":0}]
		* @param {*} error - 登录失败回调方法，style=1有效,response：JSON格式{"uri":"10001","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}	
		* @example
		* HyUDBWebSDK.Strategy.auth('10000','/web/v2/***',{
		*	style:1,
		* 	data{
		*		strategy:1,
		*		uid:122222,	 
		*		authcode:'23333bc',	 
		*       sessionData:'dddfasfsafsdfsdfsdfsdf',
		*		remember:0
		* 	}
		* 	success:function(response){},
		* 	strategy:function(strategys){},
		* 	error:function(response){}
		});
		*/
    auth: function (uri, url, options) {
      var $this = this,
        $parent = $this.$parent,
        $mobile = $this.$mobile,
        $message = $this.$message,
        $global = $this.$global,
        $item = $this.$item;
      if (arguments.length == 1 && typeof uri == 'object') {
        options = uri;
        if (options.data.strategy == 4)
          (uri = '40001'), (url = '/web/v2/antiViolentLogin');
        else if (options.data.strategy == 8)
          (uri = '40003'), (url = '/web/v2/secondAuthLogin');
        else if (options.data.strategy == 16)
          (uri = '40005'), (url = '/web/v2/secondAuthLogin');
      }
      options = $parent.Util.store(uri, $parent, options);
      if (options.style == 1 || (options.style == 2 && !$mobile.able()))
        $message.send(
          'udb_exchangelgn' + $global.session,
          $message.encode(
            $global.protocol +
              '://' +
              $global.domainFunc.login +
              '.' +
              $global.domain +
              url,
            'post',
            uri,
            'WB',
            '{"strategy":"' +
              $item.convert(options.data.strategy) +
              '","uid":"' +
              $item.convert(options.data.uid) +
              '","authcode":"' +
              $item.convert(options.data.authcode) +
              '","sessionData":"' +
              $item.convert(
                options.data.hasOwnProperty('sessionData')
                  ? options.data.sessionData
                  : $parent.Cookie.get($global.session)
              ) +
              '","remember":"' +
              $item.convert(options.data.remember, 0) +
              '"}'
          )
        );
      else if (options.style == 2 && $mobile.able()) {
        $mobile.get('common', function (response) {
          $message.send(
            'udb_exchangelgn' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.login +
                '.' +
                $global.domain +
                url,
              'post',
              uri,
              'H5',
              '{"strategy":"' +
                $item.convert(options.data.strategy) +
                '","uid":"' +
                $item.convert(options.data.uid) +
                '","authcode":"' +
                $item.convert(options.data.authcode) +
                '","sessionData":"' +
                $item.convert(
                  options.data.hasOwnProperty('sessionData')
                    ? options.data.sessionData
                    : $parent.Cookie.get($global.session)
                ) +
                '","remember":"' +
                $item.convert(options.data.remember, 0) +
                '","wupData":"' +
                $item.convert(response) +
                '"}'
            )
          );
        });
      }
    },
    /**
     * @description Code认证方式对象，对外提供sms、image等方法
     */
    Code: (prototype = {
      /**
       * @description 初始化实例对象
       * @param {object} $this - 传递父对象
       * @example
       * HyUDBWebSDK.Strategy.Code.init(this);
       */
      init: function ($this) {
        this.$parent = $this;
        this.$global = $this.$global;
        this.$message = $this.$message;
        this.$mobile = $this.$mobile;
        this.$item = $this.$item;
      },
      /**
       * @description 二次认证发送短信认证
       * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
       * @param {Long}   data.uid - 登录用户UID，必填
       * @param {String} data.sessionData - 短信验证码会话数据，必填
       * @param {*} success - 找回密码成功回调方法，response：JSON格式{"uri":"40020","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"sessionData":"ddasfdasfdsafsdfasfdasfdsafsdf"}}
       * @param {*} error - 找回密码失败回调方法，response：JSON格式{"uri":"40021","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example
       * HyUDBWebSDK.Strategy.Code.sms({
       *	style:1,
       * 	data{
       *		uid:122222,
       *       sessionData:'dddfasfsafsdfsdfsdfsdf'
       * 	}
       * 	success:function(response){},
       * 	error:function(response){}
       *});
       */
      sms: function (options) {
        this.code('40020', '/web/v2/smscode', options);
      },
      /**
       * @description 二次认证刷新图片认证
       * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
       * @param {Long}   data.uid - 登录用户UID，必填
       * @param {String} data.sessionData - 图片验证码会话数据，必填
       * @param {*} success - 找回密码成功回调方法，response：JSON格式{"uri":"40022","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"sessionData":"ddasfdasfdsafsdfasfdasfdsafsdf","data":"ddasfdasfdsafsdfasfdasfdsafsdfddasfdasfdsafsdfasfdasfdsafsdf"}}
       * @param {*} error - 找回密码失败回调方法，response：JSON格式{"uri":"40023","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example
       * HyUDBWebSDK.Strategy.Code.sms({
       *	style:1,
       * 	data{
       *		uid:122222,
       *       sessionData:'dddfasfsafsdfsdfsdfsdf'
       * 	}
       * 	success:function(response){},
       * 	error:function(response){}
       *});
       */
      image: function (options) {
        this.code('40022', '/web/v2/imagecode', options);
      },
      /**
       * @description 二次认证验证码认证
       * @param {string} uri - 认证命令
       * @param {string} url - 认证地址
       * @param {string} options - 认证验证码数据
       * @param {*} success - 二次认证验证码成功回调方法，response：JSON格式{"uri":"10000","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"sessionData":"ddasfdasfdsafsdfasfdasfdsafsdf","data":"ddasfdasfdsafsdfasfdasfdsafsdfddasfdasfdsafsdfasfdasfdsafsdf"}}
       * @param {*} error - 二次认证验证码失败回调方法，response：JSON格式{"uri":"10001","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example
       * HyUDBWebSDK.Strategy.Code.code('10000','/web/v2/***',{
       *	style:1,
       * 	data{
       *		uid:122222,
       *       sessionData:'dddfasfsafsdfsdfsdfsdf'
       * 	}
       * 	success:function(response){},
       * 	error:function(response){}
       *});
       */
      code: function (uri, url, options) {
        var $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $message = $this.$message,
          $global = $this.$global,
          $item = $this.$item;
        if (arguments.length == 1 && typeof uri == 'object') {
          options = uri;
          if (options.data.strategy == 4)
            (uri = '40022'), (url = '/web/v2/imagecode');
          else if (options.data.strategy == 8)
            (uri = '40020'), (url = '/web/v2/smscode');
        }
        options = $parents.Util.store(uri, $parents, options);
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangelgn' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.login +
                '.' +
                $global.domain +
                url,
              'post',
              uri,
              'WB',
              '{"uid":"' +
                $item.convert(options.data.uid) +
                '","sessionData":"' +
                $item.convert(
                  options.data.hasOwnProperty('sessionData')
                    ? options.data.sessionData
                    : $parents.Cookie.get($global.session)
                ) +
                '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  url,
                'post',
                uri,
                'H5',
                '{"uid":"' +
                  $item.convert(options.data.uid) +
                  '","sessionData":"' +
                  $item.convert(
                    options.data.hasOwnProperty('sessionData')
                      ? options.data.sessionData
                      : $parents.Cookie.get($global.session)
                  ) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      }
    })
  };
  /**
   * @description Security对象，对外提供常用算法方法
   */
  HyUDBWebSDK.prototype.Security = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Security.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
      this.$global = $this.JSSDK.Global;
      this.$message = $this.Message;
      this.$mobile = $this.Mobile;
      this.$item = $this.Item;
      this.V2.init(this);
    },
    /**
     * @description V2对象，对外提供虎牙登录常用login等方法
     */
    V2: (prototype = {
      /**
       * @description 初始化实例对象
       * @param {object} $this - 传递父对象
       * @example
       * HyUDBWebSDK.Login.V2.init(this);
       */
      init: function ($this) {
        this.$parent = $this;
        this.$global = $this.$global;
        this.$message = $this.$message;
        this.$mobile = $this.$mobile;
        this.$item = $this.$item;
      },
      /**
       * @description 检测帐号是YY/HY帐号
       * @param {number} action - 登陆后的跳转标识（1：登陆不做处理，2：登陆成功后，跳转指定的busiurl），缺省=1
       * @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
       * @param {string} busiurl - action=2，登陆后先执行success方法，然后跳转到此链接，必填，缺省=http://www.huya.com
       * @param {string} data.user - 检测帐号
       * @param {*} success - 修改密码成功回调方法，response：JSON格式{"uri":"60019","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":""}
       * @param {*} error - 修改密码败回调方法，response：JSON格式{"uri":"60020","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
       * @example 检测帐号：
       * HyUDBWebSDK.Security.V2.check({
       *		action:1,
       *		style:1,
       *		data:{
       *			user:'08618820037137'
       *		},
       *		success:function(response){},
       *		error:function(response){}
       * });
       */
      check: function (options) {
        var uri = '60019',
          $this = this,
          $parents = $this.$parent.$parent,
          $mobile = $this.$mobile,
          $message = $this.$message,
          $global = $this.$global,
          $item = $this.$item;
        options = $parents.Util.store(uri, $parents, options, 2);
        if (options.style == 1 || (options.style == 2 && !$mobile.able()))
          $message.send(
            'udb_exchangesec' + $global.session,
            $message.encode(
              $global.protocol +
                '://' +
                $global.domainFunc.security +
                '.' +
                $global.domain +
                '/wup/appeal/checkAccount',
              'post',
              uri,
              'WB',
              '{"user":"' + $item.convert(options.data.user) + '"}'
            )
          );
        else if (options.style == 2 && $mobile.able()) {
          $mobile.get('common', function (response) {
            $message.send(
              'udb_exchangesec' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.security +
                  '.' +
                  $global.domain +
                  '/wup/appeal/checkAccount',
                'post',
                uri,
                'H5',
                '{"user":"' +
                  $item.convert(options.data.user) +
                  '","wupData":"' +
                  $item.convert(response) +
                  '"}'
              )
            );
          });
        }
      }
    }),
    /**
     * @description SHA1对象，对外提供hexEncode方法
     */
    SHA1: (prototype = {
      /**
       * @description 加密方法
       * @param {string} value - 需要sha1的数据
       * @returns {string} - sha1后的值
       * @example
       * HyUDBWebSDK.Security.SHA1.hexEncode("password");
       */
      hexEncode: function (value) {
        return this.toHex(this.core(this.toArray(value)));
      },
      /**
       * @description 将数据转化为数组
       * @param {string} data - 需要转化的数据
       * @returns {Array} - string转化为array后的值
       * @example
       * HyUDBWebSDK.Security.SHA1.toArray("password");
       */
      toArray: function (data) {
        var blockLength = ((data.length + 8) >> 6) + 1,
          blockArray = new Array(blockLength * 16);
        for (var i = 0; i < blockLength * 16; i++) blockArray[i] = 0;
        for (i = 0; i < data.length; i++)
          blockArray[i >> 2] |= data.charCodeAt(i) << (24 - (i & 3) * 8);
        blockArray[i >> 2] |= 0x80 << (24 - (i & 3) * 8);
        blockArray[blockLength * 16 - 1] = data.length * 8;
        return blockArray;
      },
      /**
       * @description 将二进制数组转化为16进制
       * @param {Array} binArray - 需要转化的数据
       * @returns {string} - array转化为string后的值
       * @example
       * HyUDBWebSDK.Security.SHA1.toHex(binArray);
       */
      toHex: function (binArray) {
        var hexTable = '0123456789abcdef',
          hexStr = '';
        for (var i = 0; i < binArray.length * 4; i++)
          hexStr +=
            hexTable.charAt(
              (binArray[i >> 2] >> ((3 - (i % 4)) * 8 + 4)) & 0xf
            ) +
            hexTable.charAt((binArray[i >> 2] >> ((3 - (i % 4)) * 8)) & 0xf);
        return hexStr;
      },
      /**
       * @description 转换核心方法
       * @param {Array} blockArray - 需要sha1的数据
       * @returns {Array} - 核心变换后的值
       * @example
       * HyUDBWebSDK.Security.SHA1.core(blockArray);
       */
      core: function (blockArray) {
        var blkArray = blockArray;
        var w = new Array(80);
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        var e = -1009589776;
        for (var i = 0; i < blkArray.length; i += 16) {
          var olda = a;
          var oldb = b;
          var oldc = c;
          var oldd = d;
          var olde = e;
          /*对每个512位进行80步操作*/
          for (var j = 0; j < 80; j++) {
            if (j < 16) w[j] = blkArray[i + j];
            else
              w[j] = this.rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            var t = this.add(
              this.add(this.rol(a, 5), this.ft(j, b, c, d)),
              this.add(this.add(e, w[j]), this.kt(j))
            );
            e = d;
            d = c;
            c = this.rol(b, 30);
            b = a;
            a = t;
          }
          a = this.add(a, olda);
          b = this.add(b, oldb);
          c = this.add(c, oldc);
          d = this.add(d, oldd);
          e = this.add(e, olde);
        }
        return new Array(a, b, c, d, e);
      },
      /**
       * @description 将32位数拆成高16位和低16位分别进行相加，从而实现 MOD 2^32 的加法
       * @param {Integer} xValue - 需要转换的数据
       * @param {Integer} yValue - 需要转换的数据
       * @returns {Integer} - x+y后的值
       * @example
       * HyUDBWebSDK.Security.SHA1.add(xValue,yValue);
       */
      add: function (xValue, yValue) {
        var lsw = (xValue & 0xffff) + (yValue & 0xffff);
        var msw = (xValue >> 16) + (yValue >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xffff);
      },
      /**
       * @description 32位二进制数循环左移
       * @param {Integer} num - 需要转换的数据
       * @param {Integer} cnt - 需要转换的数据
       * @returns {Integer} - 32位二进制数循环左移后的值
       * @example
       * HyUDBWebSDK.Security.SHA1.rol(num,cnt);
       */
      rol: function (num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
      },
      /**
       * @description 计算ft的值
       * @param {Integer} t - 需要转换的数据
       * @param {Integer} b - 需要转换的数据
       * @param {Integer} c - 需要转换的数据
       * @param {Integer} d - 需要转换的数据
       * @returns {Integer} - ft的值
       * @example
       * HyUDBWebSDK.Security.SHA1.ft(t,b,c,d);
       */
      ft: function (t, b, c, d) {
        if (t < 20) return (b & c) | (~b & d);
        else if (t < 40) return b ^ c ^ d;
        else if (t < 60) return (b & c) | (b & d) | (c & d);
        return b ^ c ^ d;
      },
      /**
       * @description 计算kt的值
       * @param {Integer} value - 需要转换的数据
       * @returns {Integer} - kt的值
       * @example
       * HyUDBWebSDK.Security.SHA1.kt(value);
       */
      kt: function (value) {
        return value < 20
          ? 1518500249
          : value < 40
          ? 1859775393
          : value < 60
          ? -1894007588
          : -899497514;
      }
    })
  };
  /**
   * @description H5页面对象，对外提供close方法
   */
  HyUDBWebSDK.prototype.H5 = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.H5.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
      this.$mobile = $this.Mobile;
    },
    /**
     * @description 关闭H5页面窗口
     * @example
     * HyUDBWebSDK.H5.close();
     */
    close: function () {
      this.$mobile.close();
    }
  };
  /**
   * @description Item对象，对外提供init，convert方法
   */
  HyUDBWebSDK.prototype.Item = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Item.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
      this.$global = $this.JSSDK.Global;
      this.$message = $this.Message;
      this.$mobile = $this.Mobile;
      this.$item = $this.Item;
      this.Verify.init(this);
      this.User.init(this);
    },
    /**
     * @description 判断空变量
     * @param {string|boolean|number} val - 判段的值
     * @example
     * HyUDBWebSDK.Item.isempty('137200355');
     */
    isempty: function (val) {
      if (val && val != 'undefined' && val != '') return false;
      else return true;
    },
    /**
     * @description 变量长度
     * @param {string} val - 判段的值
     * @example
     * HyUDBWebSDK.Item.length('137200355');
     */
    length: function (val) {
      if (val && val != 'undefined' && val != '') {
        var str = val;
        return str.replace(/[^\x00-\xff]/g, '00').length;
      } else return 0;
    },
    /**
     * @description 去掉html标签
     * @param {string} val - 判段的值
     * @example
     * HyUDBWebSDK.Item.clearHtml('137200355');
     */
    clearHtml: function (val) {
      if (val && val != 'undefined' && val != '')
        return val.replace(/<[^>]+>/g, '');
      else return '';
    },
    /**
     * @description 手机号去掉0开头
     * @param {string} val - 判段的值
     * @example
     * HyUDBWebSDK.Item.trimPhone('00137200355');
     */
    trimPhone: function (val) {
      if (val && val != 'undefined' && val != '')
        return val.replace(/\b(0+)/gi, '');
      else return '';
    },
    /**
     * @description 转化非空变量
     * @param {string|boolean|number} val - 转化的值
     * @param {string|boolean|number} def - 缺省值
     * @example
     * HyUDBWebSDK.Item.convert('137200355');
     */
    convert: function (val, def) {
      if (
        typeof val != 'undefined' &&
        (typeof val == 'string' ||
          typeof val == 'boolean' ||
          typeof val == 'number')
      ) {
        if (typeof val == 'string')
          return val.toString().replace(new RegExp('([""])', 'g'), '\\"');
        else return val.toString();
      } else {
        if (typeof def != 'undefined') return def;
        else return '';
      }
    },
    /**
     * @description 掩码变量
     * @param {string|number} val - 转化的值
     * @param {number} type - 转化类型（type-1：手机）
     * @param {number} front - 前面位数
     * @param {number} behind - 后面位数
     * @example
     * HyUDBWebSDK.Item.mask('137200355');
     */
    mask: function (val, type, front, behind) {
      if (val != undefined && type != undefined && type == 1) {
        var mask = '',
          end = val.length - behind - 1;
        for (var i = 0; i < val.length; i++)
          mask = mask + (i < front || i > end ? val[i] : '*');
        return mask;
      } else return val;
    },
    /**
     * @description 切取字符串
     * @param {string} val - 字符串
     * @param {number} len - 切取长度
     * @example
     * HyUDBWebSDK.Item.substring('137200355',10);
     */
    substring: function (val, len) {
      if (val && val != 'undefined' && val != '') {
        if (val.replace(/[^\x00-\xff]/g, 'hy__udb').length <= len) return val;
        else {
          var m = Math.floor(len / 2);
          for (var i = m; i < val.length; i++) {
            if (
              val.substr(0, i).replace(/[^\x00-\xff]/g, 'hy__udb').length >= len
            )
              return val.substr(0, i) + '...';
          }
          return val;
        }
      } else return '';
    },
    /**
     * @description Verify验证对象，对外提供phone方法
     */
    Verify: (prototype = {
      /**
       * @description 初始化实例对象
       * @param {object} $this - 传递父对象
       * @example
       * HyUDBWebSDK.Item.Verify.init(this);
       */
      init: function ($this) {
        this.$parent = $this;
        this.$global = $this.$global;
        this.$message = $this.$message;
        this.$mobile = $this.$mobile;
        this.$item = $this.$item;
        this.Server.init(this);
      },
      /**
       * @description 本地同步验证帐号（YY模式：不能为空且超过50个字符）
       * @param {string} val - 检测的值
       * @param {number} type - 缺省类型，1：YY登录验证模式
       * @return {number} 返回值=0通过；=1不能为空，2=不通过超过长度，100-暂不支持
       * @example
       * HyUDBWebSDK.Item.Verify.account('affaff12344');
       */
      account: function (val, type) {
        if (type && type == 1) {
          if (val && val != '') {
            if (val.length < 50) return 0;
            else return 2;
          } else return 1;
        } else return 100;
      },
      /**
       * @description 本地同步验证昵称
       * @param {string} val - 检测的值
       * @param {number} type - 缺省类型，1：YY登录验证模式
       * @return {number} 返回值=0通过；=1不能为空，2=不通过超过长度
       * @example
       * HyUDBWebSDK.Item.Verify.nikname('affaff12344');
       */
      nikname: function (val, type) {
        if (type && type == 1) {
          if (val && val != '') return 0;
          else return 1;
        } else {
          if (val && val != '') {
            if (val.length < 20) {
              if (!/<|>/.test(val)) return 0;
              else return 3;
            } else return 2;
          } else return 1;
        }
      },
      /**
       * @description 本地同步验证密码（自有模式：6-20位字母/数字的组合,不能为全数字；YY模式：不能为空）
       * @param {string} val - 检测的值
       * @param {number} type - 缺省类型，1：YY登录验证模式
       * @return {number} 返回值=0通过；=1不能为空，2=不通过超过长度，3=格式不对
       * @example
       * HyUDBWebSDK.Item.Verify.password('affaff12344');
       */
      password: function (val, type) {
        if (type && type == 1) {
          if (val && val != '') return 0;
          else return 1;
        } else {
          if (val && val != '') {
            if (val.length > 20) return 2;
            else if (
              /^(?!\d+$)(?![A-Za-z#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]+$)[a-zA-Z0-9!#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]{6,20}$/.test(
                val
              )
            )
              return 0;
            else return 3;
          } else return 1;
        }
      },
      /**
       * @description 本地同步验证验证码（6位数字）
       * @param {string} val - 检测的值
       * @param {number} type - 缺省类型，1：YY登录验证模式
       * @return {number} 返回值=0通过；=1不能为空，2=不通过超过长度，3=格式不对
       * @example
       * HyUDBWebSDK.Item.Verify.code(12345);
       */
      code: function (val, type) {
        if (type && type == 1) {
          if (val && val != '') return 0;
          else return 1;
        } else {
          if (val && val != '') {
            if (val.length > 6) return 2;
            else if (/^\d{6}$/.test(val)) return 0;
            else return 3;
          } else return 1;
        }
      },
      /**
       * @description 本地同步验证手机号
       * @param {string} val - 检测的值
       * @return {boolean} 规则本地检验返回=true通过；=false不通过
       * @example
       * HyUDBWebSDK.Item.Verify.phone('18820037137');
       */
      phone: function (val) {
        if (val && val != '' && /^([0-9]*)\d{8,16}$/.test(val)) return true;
        else return false;
      },
      /**
       * @description 服务端验证对象，对外提供phone方法
       */
      Server: (prototype = {
        /**
         * @description 初始化实例对象
         * @param {object} $this - 传递父对象
         * @example
         * HyUDBWebSDK.Item.Verify.Server.init(this);
         */
        init: function ($this) {
          this.$parent = $this;
          this.$global = $this.$global;
          this.$message = $this.$message;
          this.$mobile = $this.$mobile;
          this.$item = $this.$item;
          this.V2.init(this);
        },
        /**
				* @description 服务端验证手机号
				* @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
				* @param {string} data.phone - 验证手机号码，必填，8-16位数据，第一位以0开始
				* @param {*} success - 服务端验证手机号成功回调方法，response：JSON格式{"uri":"20020","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"registed":true}},registed=true已存在，=false不存在
				* @param {*} error - 服务端验证手机号失败回调方法，response：JSON格式{"uri":"20020","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
				* @return {boolean} 规则本地检验返回=true通过；=false不通过
				* @example 服务端验证手机号：
				* HyUDBWebSDK.Item.Verify.Server.phone({
				*	style:1,
				*	data:{
				*		phone:'08613600000000'
				*	}
				*	success:function(){},
				*	error:function(){}
				});
				*/
        phone: function (options) {
          if (
            options.data.phone &&
            options.data.phone != '' &&
            /^([0-9]*)\d{8,16}$/.test(options.data.phone)
          ) {
            var uri = '20019',
              $this = this,
              $parents = $this.$parent.$parent.$parent,
              $mobile = $this.$mobile,
              $message = $this.$message,
              $global = $this.$global,
              $item = $this.$item;
            options = $parents.Util.store(uri, $parents, options);
            if (options.style == 1 || (options.style == 2 && !$mobile.able()))
              $message.send(
                'udb_exchangereg' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.register +
                    '.' +
                    $global.domain +
                    '/web/mobileRegisted',
                  'post',
                  uri,
                  'WB',
                  '{"phone":"' + $item.convert(options.data.phone) + '"}'
                )
              );
            else if (options.style == 2 && $mobile.able()) {
              $mobile.get('common', function (response) {
                $message.send(
                  'udb_exchangereg' + $global.session,
                  $message.encode(
                    $global.protocol +
                      '://' +
                      $global.domainFunc.register +
                      '.' +
                      $global.domain +
                      '/wup/mobileRegisted',
                    'post',
                    uri,
                    'H5',
                    '{"phone":"' +
                      $item.convert(options.data.phone) +
                      '","wupData":"' +
                      $item.convert(response) +
                      '"}'
                  )
                );
              });
            }
            return true;
          } else return false;
        },
        /**
         * @description V2对象，对外提供短信、验证等方法
         */
        V2: (prototype = {
          /**
           * @description 初始化实例对象
           * @param {object} $this - 传递父对象
           * @example
           * HyUDBWebSDK.Item.Verify.Server.V2.init(this);
           */
          init: function ($this) {
            this.$parent = $this;
            this.$global = $this.$global;
            this.$message = $this.$message;
            this.$mobile = $this.$mobile;
            this.$item = $this.$item;
          },
          /**
					* @description 服务端验证手机号
					* @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
					* @param {string} data.phone - 验证手机号码，必填，8-16位数据，第一位以0开始
					* @param {*} success - 服务端验证手机号成功回调方法，response：JSON格式{"uri":"60015","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"registed":true}},registed=true已存在，=false不存在
					* @param {*} error - 服务端验证手机号失败回调方法，response：JSON格式{"uri":"60016","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
					* @return {boolean} 规则本地检验返回=true通过；=false不通过
					* @example 服务端验证手机号：
					* HyUDBWebSDK.Item.Verify.Server.V2.phone({
					*	style:1,
					*	data:{
					*		phone:'08613600000000'
					*	}
					*	success:function(){},
					*	error:function(){}
					});
					*/
          phone: function (options) {
            if (
              options.data.phone &&
              options.data.phone != '' &&
              /^([0-9]*)\d{8,16}$/.test(options.data.phone)
            ) {
              var uri = '60015',
                $this = this,
                $parents = $this.$parent.$parent.$parent.$parent,
                $mobile = $this.$mobile,
                $message = $this.$message,
                $global = $this.$global,
                $item = $this.$item;
              options = $parents.Util.store(uri, $parents, options);
              if (options.style == 1 || (options.style == 2 && !$mobile.able()))
                $message.send(
                  'udb_exchangereg' + $global.session,
                  $message.encode(
                    $global.protocol +
                      '://' +
                      $global.domainFunc.register +
                      '.' +
                      $global.domain +
                      '/web/v2/mobileIsRegist',
                    'post',
                    uri,
                    'WB',
                    '{"phone":"' + $item.convert(options.data.phone) + '"}'
                  )
                );
              else if (options.style == 2 && $mobile.able()) {
                $mobile.get('common', function (response) {
                  $message.send(
                    'udb_exchangereg' + $global.session,
                    $message.encode(
                      $global.protocol +
                        '://' +
                        $global.domainFunc.register +
                        '.' +
                        $global.domain +
                        '/wup/v2/mobileIsRegist',
                      'post',
                      uri,
                      'H5',
                      '{"phone":"' +
                        $item.convert(options.data.phone) +
                        '","wupData":"' +
                        $item.convert(response) +
                        '"}'
                    )
                  );
                });
              }
              return true;
            } else return false;
          }
        })
      })
    }),
    /**
     * @description 用户信息对象，对外提供profile方法
     */
    User: (prototype = {
      /**
       * @description 初始化实例对象
       * @param {object} $this - 传递父对象
       * @example
       * HyUDBWebSDK.Item.User.init(this);
       */
      init: function ($this) {
        this.$parent = $this;
        this.$global = $this.$global;
        this.$message = $this.$message;
        this.$mobile = $this.$mobile;
        this.$item = $this.$item;
        this.V2.init(this);
      },
      /**
       * @description V2对象，对外提供用户资料等方法
       */
      V2: (prototype = {
        /**
         * @description 初始化实例对象
         * @param {object} $this - 传递父对象
         * @example
         * HyUDBWebSDK.Item.User.V2.init(this);
         */
        init: function ($this) {
          this.$parent = $this;
          this.$global = $this.$global;
          this.$message = $this.$message;
          this.$mobile = $this.$mobile;
          this.$item = $this.$item;
        },
        /**
				* @description 用户资料
				* @param {number} style - 验证码方式（1：WEB JSSDK验证码，2：Mobile WEB H5 JSSDK验证码），缺省=1
				* @param {string} data.phone - 验证手机号码，必填，8-16位数据，第一位以0开始
				* @param {*} success - 服务端验证手机号成功回调方法，response：JSON格式{"uri":"70011","version":"1.0","context":"","returnCode":"0","message":"","description":"","data":{"registed":true}},registed=true已存在，=false不存在
				* @param {*} error - 服务端验证手机号失败回调方法，response：JSON格式{"uri":"70012","version":"1.0","context":"","returnCode":"12101","message":"Internal Error!","description":"Internal Error!"}
				* @return {boolean} 规则本地检验返回=true通过；=false不通过
				* @example 服务端验证手机号：
				* HyUDBWebSDK.Item.User.V2.profile({
				*	style:1,
				*	data:{
				*		uid:'78123222',
				*		ticket:'adfafsadfsdafsdafasdfasdfsdafsdf'
				*	}
				*	success:function(){},
				*	error:function(){}
				});
				*/
        profile: function (options) {
          var uri = '70011',
            $this = this,
            $parents = $this.$parent.$parent.$parent,
            $mobile = $this.$mobile,
            $message = $this.$message,
            $global = $this.$global,
            $item = $this.$item;
          options = $parents.Util.store(uri, $parents, options);
          if (options.style == 1 || (options.style == 2 && !$mobile.able()))
            $message.send(
              'udb_exchangelgn' + $global.session,
              $message.encode(
                $global.protocol +
                  '://' +
                  $global.domainFunc.login +
                  '.' +
                  $global.domain +
                  '/web/v2/userProfile',
                'post',
                uri,
                'WB',
                '{"uid":"' +
                  $item.convert(options.data.uid) +
                  '","ticket":"' +
                  $item.convert(options.data.ticket) +
                  '"}'
              )
            );
          else if (options.style == 2 && $mobile.able()) {
            $mobile.get('common', function (response) {
              $message.send(
                'udb_exchangelgn' + $global.session,
                $message.encode(
                  $global.protocol +
                    '://' +
                    $global.domainFunc.login +
                    '.' +
                    $global.domain +
                    '/wup/v2/userProfile',
                  'post',
                  uri,
                  'H5',
                  '{"uid":"' +
                    $item.convert(options.data.uid) +
                    '","ticket":"' +
                    $item.convert(options.data.ticket) +
                    '","wupData":"' +
                    $item.convert(response) +
                    '"}'
                )
              );
            });
          }
        }
      })
    })
  };
  /**
   * @description 静态对象，对外提供byPass等静态方法
   */
  HyUDBWebSDK.prototype.Static = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Item.Static.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
      this.$global = $this.JSSDK.Global;
      this.$message = $this.Message;
      this.ByPass.init(this);
    },
    /**
     * @description 旁路策略对象，对外提供set、get方法
     */
    ByPass: (prototype = {
      /**
       * @description 初始化实例对象
       * @param {object} $this - 传递父对象
       * @example
       * HyUDBWebSDK.Static.ByPass.init(this);
       */
      init: function ($this) {
        this.$parent = $this;
        this.$global = $this.$global;
        this.$message = $this.$message;
      },
      /**
       * @description 同步服务器旁路策略
       * @example
       * HyUDBWebSDK.Static.ByPass.sync();
       */
      sync: function (options) {
        var uri = '50001',
          $this = this,
          $parent = $this.$parent.$parent,
          $message = $this.$message,
          $global = $this.$global,
          bypass = $parent.Cookie.get('udb_passdata');
        if (!(/^[0-9]+$/g.test(bypass) && !isNaN(parseInt(bypass)))) {
          if (
            options &&
            typeof options != 'undefined' &&
            options.hasOwnProperty('data')
          ) {
            options.data.success = function (response) {
              if (
                /^[0-9]+$/g.test(response.data.bypass) &&
                !isNaN(parseInt(response.data.bypass))
              ) {
                $global.byPass = response.data.bypass;
                $parent.Cookie.set(
                  'udb_passdata',
                  $global.byPass,
                  $global.domain
                );
              }
            };
            $global = $parent.Util.extend($global, options.global);
            options.data = $parent.Util.store(uri, $parent, options.data);
            $message.jsonp(
              0,
              $global.protocol +
                '://' +
                $global.domainFunc.api +
                '.' +
                $global.domain +
                '/web/hy/bypass/getBypass',
              'jsonp',
              uri,
              'WB',
              options.data.time,
              '{}'
            );
          }
        } else $global.byPass = bypass;
      },
      /**
       * @description 获取旁路策略
       * @example
       * HyUDBWebSDK.Static.ByPass.get();
       */
      get: function () {
        var $this = this,
          $parent = $this.$parent.$parent,
          $global = $this.$global,
          bypass = $parent.Cookie.get('udb_passdata');
        if (/^[0-9]+$/g.test(bypass) && isNaN(parseInt(bypass))) {
          $global.byPass = parseInt(byPass);
          return $global.byPass;
        } else return $global.byPass;
      }
    })
  };
  /**
   * @description 图形界面对象，对外提供hint等方法
   */
  HyUDBWebSDK.prototype.Gui = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Gui.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
    },
    /**
     * @description 信息提示
     * @param {String} text - 显示文本
     * @param {object} object - 当前对象
     * @example
     * HyUDBWebSDK.Gui.hint();
     */
    hint: function (type, text, object, style, time, focus, callback) {
      if (object && object.parent()) {
        if (type != undefined) {
          if (type == 0) {
            var $hint = object
              .parents('div.UDBSdkLgn-content')
              .find('div.UDBSdkLgn-tips');
            if ($hint != undefined && $hint.length > 0) {
              clearTimeout($hint.attr('timer'));
              $hint.remove();
            }
            $hint = $(
              "<div class='UDBSdkLgn-tips'" +
                (style != undefined && style && style != ''
                  ? " style='" + style + "'"
                  : '') +
                '><div>' +
                text +
                '</div></div>'
            );
            $hint.insertBefore(object.parent());
            if (!(focus != undefined && focus == 0)) object.focus();
            $hint.attr(
              'timer',
              setTimeout(
                function () {
                  object
                    .parents('div.UDBSdkLgn-content')
                    .find('div.UDBSdkLgn-tips')
                    .remove();
                },
                time != undefined && time && time > 0 ? time : 6000
              )
            );
          } else if (type == 1 || type == 2) {
            var $hint = object
              .parents(
                type == 1 ? 'div.UDBSdkLgn-content' : 'div.UDBSdkReg-content'
              )
              .find(
                type == 1 ? 'div.UDBSdkLgn-regError' : 'div.UDBSdkReg-error'
              );
            if ($hint != undefined && $hint.length > 0) {
              var timer = $hint.attr('timer');
              if (timer != undefined) {
                clearTimeout($hint.attr('timer'));
                $hint.removeAttr('timer').removeAttr('object');
              }
              if (type == 1) $hint.remove();
              else $hint.addClass('UDBSdkReg-none');
            }
            if (type == 2)
              $hint
                .removeClass('UDBSdkReg-none')
                .html("<i class='icon'></i>" + text);
            else {
              $hint = $(
                "<div class='UDBSdkLgn-regError'><i></i>" + text + '</div>'
              );
              $hint.insertAfter(object.parent());
            }
            if (!(focus != undefined && focus == 0)) {
              object.focus();
              $hint.attr('object', object.attr('name'));
            }
            $hint.attr(
              'timer',
              setTimeout(
                function () {
                  if (type == 1)
                    object
                      .parents('div.UDBSdkLgn-content')
                      .find('div.UDBSdkLgn-regError')
                      .remove();
                  else {
                    object
                      .parents('div.UDBSdkReg-content')
                      .find('div.UDBSdkReg-error')
                      .addClass('UDBSdkReg-none');
                    $hint.removeAttr('timer').removeAttr('object');
                  }
                  if (callback && typeof callback == 'function')
                    callback.call(window);
                },
                time != undefined && time && time > 0
                  ? time
                  : type == 2
                  ? 12000
                  : 6000
              )
            );
          } else if (type == 3) {
            var $hint = $('body').find(
              style != undefined && style != '' ? style : 'UDBSdkReg-tips'
            );
            if ($hint != undefined && $hint.length > 0) {
              clearTimeout($hint.attr('timer'));
              $hint.remove();
            }
            $hint = $(
              "<div class='" +
                (style != undefined && style != '' ? style : 'UDBSdkReg-tips') +
                "'>" +
                text +
                '<div>'
            );
            $('body').append($hint);
            $hint.attr(
              'timer',
              setTimeout(
                function () {
                  $('body')
                    .find(
                      style != undefined && style != ''
                        ? style
                        : 'div.UDBSdkReg-tips'
                    )
                    .remove();
                  if (callback && typeof callback == 'function')
                    callback.call(window);
                },
                time != undefined && time && time > 0 ? time : 2000
              )
            );
          }
        }
      }
    }
  };
  /**
   * @description 跳转到指定页面
   * @param {string} url - 跳转地址
   * @example
   * HyUDBWebSDK.location("www.huya.com");
   */
  HyUDBWebSDK.prototype.location = function (url) {
    window.location.href = url;
  };
  /**
   * @description 初始化事件监听
   * @param {*} callback - 回调方法
   * @example
   * HyUDBWebSDK.listen(function(response){
   * });
   */
  HyUDBWebSDK.prototype.listen = function (callback) {
    var $this = this,
      $global = $this.JSSDK.Global;
    try {
      if (window.postMessage) {
        if (window.addEventListener) {
          window.addEventListener(
            'message',
            function (event) {
              var origin = event.origin
                ? event.origin.toLowerCase()
                : event.origin;
              if (
                origin &&
                (origin.indexOf(
                  $global.domainFunc.login + '.' + $global.domain
                ) > -1 ||
                  origin.indexOf(
                    $global.domainFunc.register + '.' + $global.domain
                  ) > -1 ||
                  origin.indexOf(
                    $global.domainFunc.api + '.' + $global.domain
                  ) > -1 ||
                  origin.indexOf(
                    $global.domainFunc.thrid + '.' + $global.domain
                  ) > -1 ||
                  origin.indexOf(
                    $global.domainFunc.security + '.' + $global.domain
                  ) > -1 ||
                  origin.indexOf(
                    $global.domainFunc.html + '.' + $global.domain
                  ) > -1)
              )
                callback.message.call(callback, event.data);
            },
            false
          );
        } else if (window.attachEvent) {
          window.attachEvent('onmessage', function (event) {
            var origin = event.origin
              ? event.origin.toLowerCase()
              : event.origin;
            if (
              origin &&
              (origin.indexOf($global.domainFunc.login + '.' + $global.domain) >
                -1 ||
                origin.indexOf(
                  $global.domainFunc.register + '.' + $global.domain
                ) > -1 ||
                origin.indexOf($global.domainFunc.api + '.' + $global.domain) >
                  -1 ||
                origin.indexOf(
                  $global.domainFunc.thrid + '.' + $global.domain
                ) > -1 ||
                origin.indexOf(
                  $global.domainFunc.security + '.' + $global.domain
                ) > -1 ||
                origin.indexOf($global.domainFunc.html + '.' + $global.domain) >
                  -1)
            )
              callback.message.call(callback, event.data);
          });
        }
      } else {
        var hash = '';
        setInterval(function () {
          if (window.name !== hash) {
            hash = window.name;
            callback.message.call(callback, hash);
          }
        }, 5);
      }
    } catch (except) {
      $this.Message.error(
        'COR_LIS',
        'ERROR',
        encodeURIComponent(except.message)
      );
    }
  };
  /**
   * @description 工具对象，对外提供guid、extend方法
   */
  HyUDBWebSDK.prototype.Util = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Util.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
    },
    /**
     * @description 扩展参数对比
     * @param {object} target - 目标对象
     * @param {object} source - 源对象
     * @returns {object} - 合成的对象
     * HyUDBWebSDK.Util.extend(defaults,options);
     */
    extend: function (target, source) {
      for (var p in source) {
        if (source.hasOwnProperty(p)) target[p] = source[p];
      }
      return target;
    },
    /**
     * @description 存储参数变量
     * @param {number} uri - 命令ID
     * @param {object} owner - 目标对象
     * @param {object} options - 源对象
     * @param {number} symbol - 类型
     * @returns {object} - 返回对象
     * HyUDBWebSDK.Util.store(owners,options,type);
     */
    store: function (uri, owners, options, symbol) {
      var defaults = {
          action: 1,
          style: 1,
          busiurl: 'https://www.huya.com',
          mobcall: 1,
          pcecall: 1,
          start: function (response) {},
          success: function (response) {},
          complete: function (response) {},
          strategy: function (strategys) {},
          error: function (response) {}
        },
        $command = owners.JSSDK.Command;
      if (symbol && symbol == 1) {
        defaults['width'] = 500;
        defaults['height'] = 600;
        defaults['type'] = 'qq';
        defaults['terminal'] = 'web';
        defaults['win'] = '0';
      } else if (symbol && symbol == 2) defaults['step'] = 1;
      else if (symbol && symbol == 3) defaults['type'] = 1;
      options = this.extend(defaults, options);
      $command[uri]['action'] = options.action;
      $command[uri]['style'] = options.style;
      $command[uri]['mobcall'] = options.mobcall;
      $command[uri]['pcecall'] = options.pcecall;
      $command[uri]['busiurl'] = options.busiurl;
      $command[uri]['start'] = options.start;
      $command[uri]['success'] = options.success;
      $command[uri]['complete'] = options.complete;
      $command[uri]['strategy'] = options.strategy;
      $command[uri]['error'] = options.error;
      $command[uri]['time'] = this.guid(2);
      $command[uri]['uri'] = uri;
      return options;
    },
    /**
     * @description 产生唯一ID
     * @param {number} type - 缺省类型，1：当天毫秒
     * @example
     * HyUDBWebSDK.Util.guid();
     */
    guid: function (type) {
      var date = new Date();
      if (type && type == 1)
        return (
          Date.UTC(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
          ) -
          Date.UTC(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            0,
            0,
            0,
            0
          )
        );
      else if (type && type == 2)
        return Date.UTC(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          date.getSeconds(),
          date.getMilliseconds()
        );
      else
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (
          c
        ) {
          var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        });
    },
    /**
     * @description 缩减对象
     * @param {object} message - 目标对象
     * @example
     * HyUDBWebSDK.Util.reduce(message);
     */
    reduce: function (message) {
      if (message.hasOwnProperty('data') && message.data) {
        if (message.data.hasOwnProperty('sessionData'))
          delete message.data.sessionData;
        if (message.data.hasOwnProperty('wupData')) delete message.data.wupData;
        if (message.data.hasOwnProperty('domainUrlList'))
          delete message.data.domainUrlList;
        if (message.data.hasOwnProperty('data')) delete message.data.data;
        if (message.data.hasOwnProperty('sign')) delete message.data.sign;
        if (message.data.hasOwnProperty('status')) delete message.data.status;
        if (message.data.hasOwnProperty('ticket5060'))
          delete message.data.ticket5060;
        if (message.data.hasOwnProperty('biztoken'))
          delete message.data.biztoken;
        if (message.data.hasOwnProperty('avatar')) delete message.data.avatar;
        if (message.data.hasOwnProperty('openid')) delete message.data.openid;
        if (message.data.hasOwnProperty('regOrigin'))
          delete message.data.regOrigin;
        if (message.data.hasOwnProperty('passport'))
          delete message.data.passport;
        if (
          message.data.hasOwnProperty('strategys') &&
          message.data.strategys &&
          message.data.strategys != undefined &&
          message.data.strategys.length > 0
        ) {
          for (var i = 0; i < message.data.strategys.length; i++) {
            if (message.data.strategys[i].hasOwnProperty('data'))
              delete message.data.strategys[i].data;
            if (message.data.strategys[i].hasOwnProperty('sessionData'))
              delete message.data.strategys[i].sessionData;
          }
        }
      }
    },
    /**
     * @description 网络检测
     * @returns {object} - 合成的对象
     * HyUDBWebSDK.Util.offline();
     */
    offline: function () {
      if (
        !(undefined === typeof window.navigator.onLine) &&
        !window.navigator.onLine
      )
        return true;
      else return false;
    },
    /**
		* @description 获取sdid
		* HyUDBWebSDK.Util.getSdid();
		*/
		getSdid: function() {

			var _this = this;
			var getData = function() {
				try {
					return window.localStorage.getItem("sdid");
				} catch (error) {
					return _this.$parent.Cookie.get("sdid");
				}
			}
			var createCsid = function() {
				var uuid = _this.$parent.Util.guid();
				var csid_uuid = 'csid_' + uuid;

				try {
					window.localStorage.setItem("sdid", csid_uuid);
				} catch (error) {
					_this.$parent.Cookie.set("sdid", csid_uuid, "", 7)
				}

				return csid_uuid
			}
			var sdid =  getData() || createCsid();
			return sdid;
		}
  };
  /**
   * @description Html对象，对外提供add、remove方法
   */
  HyUDBWebSDK.prototype.Html = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Html.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
    },
    /**
     * @description 添加html元素
     * @param {string} options.tag - 元素名称
     * @param {string} options.pos - 加入位置
     * @param {object} options.urlList - 变更元素数组
     * @param {*} options.success - 加载成功回调方法
     * @param {*} options.error - 加载失败回调方法
     * @example
     * HyUDBWebSDK.Html.add({tag:'',urlList:[{id:'',url:''}],success:function(){},error:function(){}});
     */

    add: function (options) {
      var count = 0,
        urlList = new Array();
      if (
        options &&
        options.urlList &&
        Object.prototype.toString.call(options.urlList) == '[object Array]'
      ) {
        if (options.urlList.length > 0) {
          for (var i = 0; i < options.urlList.length; i++)
            if (options.urlList[i] && options.urlList[i] != undefined)
              urlList.push(options.urlList[i]);
          for (var i = 0; i < urlList.length; i++) {
            var item = urlList[i];
            if ((item && typeof item == 'object') || typeof item == 'string') {
              var findItem = item.id
                ? document.getElementById(item.id)
                : undefined;
              if (findItem == null || findItem == undefined) {
                var tagElement = document.createElement(options.tag);
                if (
                  options.tag.toLowerCase() == 'script' ||
                  options.tag.toLowerCase() == 'link'
                )
                  tagElement.type =
                    options.tag.toLowerCase() == 'script'
                      ? 'text/javascript'
                      : 'text/css';
                else tagElement.style.cssText = 'border:0;width:0;height:0;';
                if (options.success && typeof options.success == 'function') {
                  if (tagElement.attachEvent)
                    tagElement.attachEvent('onload', function (event) {
                      count++;
                      if (count == urlList.length)
                        options.success.call(window, event);
                    });
                  else
                    tagElement.addEventListener(
                      'load',
                      function (event) {
                        count++;
                        if (count == urlList.length)
                          options.success.call(window, event);
                      },
                      true
                    );
                }
                if (options.error && typeof options.error == 'function') {
                  if (tagElement.attachEvent)
                    tagElement.attachEvent('onerror', function (event) {
                      options.error.call(window, event);
                    });
                  else
                    tagElement.addEventListener(
                      'error',
                      function (event) {
                        options.error.call(window, event);
                      },
                      true
                    );
                }
                if (typeof item == 'object') {
                  if (item.id) tagElement.id = item.id;
                  tagElement.src = item.url;
                } else tagElement.src = item;
                if (
                  options.tag.toLowerCase() == 'script' ||
                  options.tag.toLowerCase() == 'link'
                ) {
                  var head = document.getElementsByTagName('head')[0];
                  if (head) head.appendChild(tagElement);
                } else {
                  if (options.pos && options.pos == 'document') {
                    tagElement.style.cssText = 'display:none;';
                    document.documentElement.appendChild(tagElement);
                  } else {
                    var divElement = document.createElement('div');
                    divElement.style.cssText = 'display:none;';
                    divElement.appendChild(tagElement);
                    document.body.insertBefore(
                      divElement,
                      document.body.lastChild
                    );
                  }
                }
              } else if (findItem) findItem.src = item.url;
            }
          }
        } else if (options.success && typeof options.success == 'function')
          options.success.call(window);
      } else if (options.success && typeof options.success == 'function')
        options.success.call(window);
    },
    /**
     * @description 删除html元素
     * @param {string} options.id - 元素名称
     * @param {*} options.callback - 删除成功回调方法
     * @example
     * HyUDBWebSDK.Html.remove({id:'',function(){}});
     */
    remove: function (options) {
      if (options) {
        if (options.id) {
          var findItem = document.getElementById(options.id);
          if (findItem) findItem.parentNode.removeChild(findItem);
        }
        if (options.callback && typeof options.callback == 'function')
          options.callback.call(window);
      }
    }
  };
  /**
   * @description Callback对象，对外提供message，before，handle方法
   */
  HyUDBWebSDK.prototype.Callback = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Callback.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
      this.$message = $this.Message;
      this.$global = $this.JSSDK.Global;
      this.$resource = $this.JSSDK.Resource;
      this.$report = $this.Report;
      this.$command = $this.JSSDK.Command;
      this.$mobile = $this.Mobile;
      this.$pc = $this.PC;
      this.$util = $this.Util;
    },
    /**
     * @description 消息处理
     * @param {string} response - 回调参数JSON格式字符串
     * @example
     * HyUDBWebSDK.Callback.message(response);
     */
    message: function (response) {
      var $this = this,
        $parent = $this.$parent,
        $message = $this.$message,
        $mobile = $this.$mobile,
        $pc = $this.$pc,
        $global = $this.$global,
        $resource = $this.$resource,
        $command = $this.$command,
        $report = $this.$report,
        $util = $this.$util;
      var $exchange =
        typeof response == 'string' ? $message.decode(response) : response;
      if (
        $exchange &&
        typeof $exchange != 'undefined' &&
        typeof $exchange == 'object'
      ) {
        if (
          $exchange.hasOwnProperty('uri') &&
          $exchange.hasOwnProperty('version') &&
          $exchange.hasOwnProperty('context') &&
          $exchange.hasOwnProperty('returnCode') &&
          $exchange.hasOwnProperty('message') &&
          $exchange.hasOwnProperty('description')
        ) {
          if (
            !$exchange.hasOwnProperty('exchange') ||
            ($exchange.hasOwnProperty('exchange') &&
              $exchange.exchange == $global.exchange)
          ) {
            var uri = (parseInt($exchange.uri) - 1).toString(),
              $variable = $command[uri];
            if ($variable != undefined && $variable) {
              try {
                $report.info($variable, $exchange);
              } catch (except) {}
              if (
                $variable &&
                $variable.hasOwnProperty('start') &&
                $variable.start &&
                typeof $variable.start == 'function'
              )
                $variable.start.call(window, $exchange);
              if (
                $exchange.uri == '10002' ||
                $exchange.uri == '10010' ||
                $exchange.uri == '10014' ||
                $exchange.uri == '10004' ||
                $exchange.uri == '10016' || 
                $exchange.uri == '10020'
              ) {
                /*10002-第三方登录、10010-手机登录、10014-匿名登录、10004-第三方互联、10016-退出登录、 10020-开放平台密码登录*/
                $this.before($exchange, $variable, function () {
                  if (
                    $exchange.hasOwnProperty('data') &&
                    $exchange.data &&
                    $exchange.data.hasOwnProperty('domainUrlList') &&
                    $exchange.data.domainUrlList &&
                    $exchange.data.domainUrlList.length > 0
                  )
                    $parent.Html.add({
                      tag: 'iframe',
                      urlList: $exchange.data.domainUrlList,
                      success: function () {
                        $this.handle($exchange, $variable, function () {
                          if (
                            $variable.hasOwnProperty('mobcall') &&
                            $variable.mobcall &&
                            $variable.mobcall == 1
                          )
                            $mobile.message(
                              $exchange.uri,
                              $exchange.data.wupData
                            );
                        });
                      }
                    });
                  else
                    $this.handle($exchange, $variable, function () {
                      if (
                        $variable.hasOwnProperty('mobcall') &&
                        $variable.mobcall &&
                        $variable.mobcall == 1
                      )
                        $mobile.message($exchange.uri, $exchange.data.wupData);
                    });
                });
              } else if (
                $exchange.uri == '10012' ||
                $exchange.uri == '20006' ||
                $exchange.uri == '60002'
              ) {
                /*10012-绑定帐号;20006-手机注册;60002-虎牙手机注册*/
                $this.before($exchange, $variable, function () {
                  if (
                    $exchange.hasOwnProperty('data') &&
                    $exchange.data &&
                    $exchange.data.hasOwnProperty('sessionData') &&
                    $exchange.data.sessionData != null
                  )
                    $parent.Cookie.set(
                      $global.session,
                      $exchange.data.sessionData
                    );
                  else $parent.Cookie.remove($global.session);
                  if (
                    $exchange.hasOwnProperty('data') &&
                    $exchange.data &&
                    $exchange.data.hasOwnProperty('domainUrlList') &&
                    $exchange.data.domainUrlList &&
                    $exchange.data.domainUrlList.length > 0
                  )
                    $parent.Html.add({
                      tag: 'iframe',
                      urlList: $exchange.data.domainUrlList,
                      success: function () {
                        $this.handle($exchange, $variable, function () {
                          if (
                            $variable.hasOwnProperty('mobcall') &&
                            $variable.mobcall &&
                            $variable.mobcall == 1
                          )
                            $mobile.message(
                              $exchange.uri,
                              $exchange.data.wupData
                            );
                        });
                      }
                    });
                  else
                    $this.handle($exchange, $variable, function () {
                      if (
                        $variable.hasOwnProperty('mobcall') &&
                        $variable.mobcall &&
                        $variable.mobcall == 1
                      )
                        $mobile.message($exchange.uri, $exchange.data.wupData);
                    });
                });
              } else if (
                $exchange.uri == '20010' ||
                $exchange.uri == '20012' ||
                $exchange.uri == '60004' ||
                $exchange.uri == '60006' ||
                $exchange.uri == '60014' ||
                $exchange.uri == '60018' ||
                $exchange.uri == '60012' ||
                $exchange.uri == '60020' ||
                $exchange.uri == '60028'
              ) {
                /*20010-发送验证码、20012-验证验证码、60004-旁路发送验证码、60006-旁路验证验证码、60012-改密码检测、60014-找回密码检测、60018-检测手机一致性、60020-检测是否YY和HY帐号，60028-短信登录验证码*/
                $this.before($exchange, $variable, function () {
                  if (
                    $exchange.hasOwnProperty('data') &&
                    $exchange.data &&
                    $exchange.data.hasOwnProperty('sessionData') &&
                    $exchange.data.sessionData != null
                  )
                    $parent.Cookie.set(
                      $global.session,
                      $exchange.data.sessionData
                    );
                  $this.handle($exchange, $variable);
                });
              } else if (
                $exchange.uri == '20014' ||
                $exchange.uri == '20018' ||
                $exchange.uri == '60010' ||
                $exchange.uri == '60008'
              ) {
                /*20014-修改密码、20018-找回密码、60010-虎牙找回密码、60008-虎牙修改密码*/
                $this.before($exchange, $variable, function () {
                  $parent.Cookie.remove($global.session);
                  $parent.Html.add({
                    tag: 'iframe',
                    urlList: $parent.Cookie.url(
                      $global.domainFunc.hasOwnProperty('login') &&
                        $global.domainFunc.login
                        ? $global.domainFunc.login
                        : 'udblgn',
                      '/web/logout?' + $parent.Util.guid(1)
                    ),
                    success: function () {
                      $this.handle($exchange, $variable, function () {
                        if (
                          $variable.hasOwnProperty('mobcall') &&
                          $variable.mobcall &&
                          $variable.mobcall == 1
                        )
                          $mobile.message(
                            $exchange.uri,
                            $exchange.data.wupData
                          );
                      });
                    }
                  });
                });
              } else if (
                $exchange.uri == '20020' ||
                $exchange.uri == '60016' ||
                $exchange.uri == '60022' ||
                $exchange.uri == '70012' ||
                $exchange.uri == '70014' ||
                $exchange.uri == '10018'
              ) {
                /*20020-手机号码检测、60016-虎牙帐号手机号码检测、60022-虎牙帐号设置资料、70012-虎牙帐号用户资料、70014-虎牙手机掩码、10018-获取开放平台授权应用信息*/
                $this.before($exchange, $variable, function () {
                  $this.handle($exchange, $variable);
                });
              } else if (
                $exchange.uri == '70002' ||
                $exchange.uri == '70004' ||
                $exchange.uri == '70006' ||
                $exchange.uri == '70008' ||
                $exchange.uri == '70010'
              ) {
                /*70002-获取二维码图片、70004-检测二维码、70006-二维码通知、70008-二维码确认、70010-二维码取消*/
                $this.before($exchange, $variable, function () {
                  $this.handle($exchange, $variable);
                });
              } else if (
                $exchange.uri == '30002' ||
                $exchange.uri == '30004' ||
                $exchange.uri == '30006' ||
                $exchange.uri == '30008' ||
                $exchange.uri == '40002' ||
                $exchange.uri == '40004' ||
                $exchange.uri == '40006' ||
                $exchange.uri == '60024' ||
                $exchange.uri == '60026'
              ) {
                /*30002-虎牙帐号登录，30004-虎牙第三方帐号登录，30006-虎牙帐号退出，30008-虎牙帐号快速登录，40002-二次认证短信登录，40004-二次认证图片登录，40006-二次认证令牌登录，60024-刷新防刷图片验证码，60026-手机短信登录*/
                $this.before($exchange, $variable, function () {
                  $parent.Cookie.remove($global.session);
                  $this.handle($exchange, $variable, function () {
                    if (
                      $variable.hasOwnProperty('mobcall') &&
                      $variable.mobcall &&
                      $variable.mobcall == 1
                    )
                      $mobile.message($exchange.uri, $exchange.data.wupData);
                  });
                });
              } else if ($exchange.uri == '40021' || $exchange.uri == '40023') {
                /*40021-二次认证短信验证码，40023-二次认证图片验证码*/
                $this.before($exchange, $variable, function () {
                  if (
                    $exchange.hasOwnProperty('data') &&
                    $exchange.data &&
                    $exchange.data.hasOwnProperty('sessionData') &&
                    $exchange.data.sessionData != null
                  )
                    $parent.Cookie.set(
                      $global.session,
                      $exchange.data.sessionData
                    );
                  $this.handle($exchange, $variable, function () {
                    if (
                      $variable.hasOwnProperty('mobcall') &&
                      $variable.mobcall &&
                      $variable.mobcall == 1
                    )
                      $mobile.message($exchange.uri, $exchange.data.wupData);
                  });
                });
              } else if ($exchange.uri == '50002') {
                /*50002-静态获取旁路策略*/
                $this.before($exchange, $variable, function () {
                  $this.handle($exchange, $variable);
                });
              }
              if (
                $variable &&
                $variable.hasOwnProperty('complete') &&
                $variable.complete &&
                typeof $variable.complete == 'function'
              )
                $variable.complete.call(window, $exchange);
            } else if (
              $global.hasOwnProperty('error') &&
              $global.error &&
              typeof $global.error == 'function'
            ) {
              var find = false;
              for (var uri in $resource.URI) {
                if ($resource.URI[uri] == $exchange.uri) {
                  for (var except in $resource.EXCEPT[uri]) {
                    if ($resource.EXCEPT[uri][except] == $exchange.returnCode) {
                      find = true;
                      $exchange.description =
                        $resource.MESSAGE[
                          $global.lcid == '2052' || $global.lcid == '1033'
                            ? $global.lcid
                            : '1033'
                        ][uri][except];
                      $exchange.context =
                        'ER-' +
                        $parent.Item.convert(
                          $parent.Cookie.get('udb_guiddata')
                        ) +
                        '-' +
                        $parent.Item.convert(
                          $parent.Cookie.get('__yamid_new')
                        ) +
                        '-' +
                        $parent.Item.convert($parent.Cookie.get('guid'));
                      try {
                        $report.error({ uri: $exchange.uri }, $exchange);
                      } catch (except) {}
                      $global.error.call(window, $exchange);
                      break;
                    }
                  }
                  break;
                }
              }
              if (!find) {
                $util.reduce($exchange);
                $message.error(
                  'COR_CAL',
                  'UNKNOWN',
                  $message.stringify($exchange)
                );
              }
            }
          } else {
            $util.reduce($exchange);
            $message.error(
              'COR_CAL',
              'EXCHANGE',
              $message.stringify($exchange)
            );
          }
        } else $message.error('COR_CAL', 'FORMAT', response);
      } else $message.error('COR_CAL', 'PARSE', response);
    },
    /**
     * @description 消息核心前置处理
     * @param {object} response - JSON格式消息
     * @param {object} variable - 全局变量
     * @param {*} callbvariablack - 回调方法
     * @example
     * HyUDBWebSDK.Callback.before({},JSSDK.Global,function(){});
     */
    before: function (message, variable, callback) {
      var $this = this,
        $parent = $this.$parent,
        $global = $this.$global;
      if (
        message &&
        message.returnCode == '0' &&
        callback &&
        typeof callback == 'function'
      )
        callback.call(window);
      else if (
        variable &&
        variable.hasOwnProperty('error') &&
        variable.error &&
        typeof variable.error == 'function'
      ) {
        if (
          message.returnCode == '10030' ||
          message.returnCode == '70001' ||
          message.returnCode == '10039'
        ) {
          if (
            message.hasOwnProperty('data') &&
            message.data != null &&
            message.data.hasOwnProperty('sessionData') &&
            message.data.sessionData != null &&
            message.data.hasOwnProperty('strategys') &&
            message.data.strategys != null
          ) {
            $parent.Cookie.set($global.session, message.data.sessionData);
            if (
              variable.hasOwnProperty('strategy') &&
              variable.strategy &&
              typeof variable.strategy == 'function'
            ) {
              variable.strategy.call(window, message);
              return;
            }
          }
        }
        variable.error.call(window, message);
      } else if (
        $global.hasOwnProperty('error') &&
        $global.error &&
        typeof $global.error == 'function'
      )
        $global.error.call(window, message);
    },
    /**
     * @description 消息核心处理
     * @param {object} response - JSON格式消息
     * @param {object} variable - 全局变量
     * @param {*} callback - 回调方法，有回调则首先执行回调
     * @example
     * HyUDBWebSDK.Callback.handle({},JSSDK.Global,function(){});
     */
    handle: function (message, variable, callback) {
      var $this = this,
        $parent = $this.$parent;
      if (
        variable &&
        variable.hasOwnProperty('success') &&
        variable.success &&
        typeof variable.success == 'function'
      )
        variable.success.call(window, message);
      if (
        variable &&
        variable.hasOwnProperty('style') &&
        variable.style &&
        variable.style == 1 &&
        variable.hasOwnProperty('action') &&
        variable.action &&
        variable.action == 2 &&
        variable.hasOwnProperty('busiurl') &&
        variable.busiurl &&
        variable.busiurl != ''
      )
        $parent.location(variable.busiurl);
      else if (
        variable &&
        variable.hasOwnProperty('style') &&
        variable.style &&
        variable.style == 2 &&
        callback &&
        typeof callback == 'function' &&
        message &&
        message.hasOwnProperty('data') &&
        message.data
      )
        callback.call(window);
    }
  };
  /**
   * @description Message对象，对外提供init，exchange，send方法
   */
  HyUDBWebSDK.prototype.Message = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Message.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
      this.$global = $this.JSSDK.Global;
      this.$resource = $this.JSSDK.Resource;
      this.$report = $this.Report;
      this.$item = $this.Item;
      this.$cookie = $this.Cookie;
    },
    /**
     * @description发送消息
     * @param {string} target - 消息对象名称
     * @param {string} data - 消息参数、建议以Json格式
     * @example
     * HyUDBWebSDK.Message.send("target","{'name':'passpaort'}");
     */
    send: function (target, data) {
      var iframe = document.getElementById(target);
      if (iframe) {
        var msgWindow = iframe.contentWindow;
        if (msgWindow) {
          if (window.postMessage)
            msgWindow.postMessage(data, iframe.getAttribute('src'));
          else msgWindow.name = data;
        } else this.error('COR_SND', 'NOTFOUND');
      } else this.error('COR_SND', 'NOTINIT');
    },
    /**
     * @description JSonp发送消息
     * @param {number} type - 0：内部模式，1：自定义模式
     * @param {string} url - 消息地址
     * @param {string} method - 消息方法此处为jsonp
     * @param {string} uri - 消息命令
     * @param {string} context - 上下文
     * @param {number} time - 超时时间
     * @param {string} data - 消息数据
     * @param {string} callback - 回调方法名称
     * @param {*} success - 成功回调方法
     * @param {*} error - 失败回调方法
     */
    jsonp: function (
      type,
      url,
      method,
      uri,
      context,
      time,
      data,
      callback,
      success,
      error
    ) {
      var $this = this,
        callback =
          callback == undefined
            ? 'JSonp' + $this.$parent.Util.guid(2)
            : callback;
      var head = document.getElementsByTagName('head')[0],
        script = document.createElement('script');
      head.appendChild(script);
      script.async = true;
      window[callback] = function (response) {
        clearTimeout(script.timer);
        window[callback] = null;
        head.removeChild(script);
        if (type == 0) {
          if (window.postMessage)
            window.postMessage($this.stringify(response), '*');
          else window.name = $this.stringify(response);
        } else if (type == 1) success.call(window, response);
      };
      script.timer = setTimeout(
        function () {
          clearTimeout(script.timer);
          window[callback] = null;
          head.removeChild(script);
          if (type == 0) $this.error('COR_JNP', 'TIMEOUT');
          else if (type == 1) error.call(window);
        },
        time > 0 ? time : 3000
      );
      script.onerror = function () {
        clearTimeout(script.timer);
        window[callback] = null;
        head.removeChild(script);
        if (type == 0) $this.error('COR_JNP', 'LDERROR');
        else if (type == 1) error.call(window);
      };
      if (type == 0)
        script.src =
          url +
          '?callback=' +
          callback +
          '&request=' +
          $this.encode(url, method, uri, context, data);
      else if (type == 1)
        script.src =
          url +
          '?callback=' +
          callback +
          (data != undefined && data != '' ? '&' + data : '');
    },
    /**
     * @description 消息编码
     * @param {string} url - 消息地址
     * @param {string} method - 消息方法
     * @param {string} uri - 消息命令
     * @param {string} data - 消息数据
     * @returns {object} - 返回JSON格式消息字符串
     */
    encode: function (url, method, uri, context, data) {
      var $this = this,
        $parent = $this.$parent,
        $resource = $this.$resource,
        $global = $this.$global,
        $item = $this.$item,
        $cookie = $this.$cookie;
      return encodeURIComponent(
        '{' +
          (method == 'jsonp'
            ? ''
            : '"url":"' + url + '","method":"' + method + '",') +
          '"uri":"' +
          uri +
          '","version":"' +
          $resource.VERSION +
          '","context":"' +
          context +
          '-' +
          $item.convert($cookie.get('udb_guiddata')) +
          '-' +
          $item.convert($cookie.get('__yamid_new')) +
          '-' +
          $item.convert($cookie.get('guid')) +
          '","appId":"' +
          $global.appid +
          '","lcid":"' +
          $global.lcid +
          '","byPass":"' +
          $global.byPass +
          '","requestId":"' +
          $parent.Util.guid(1) +
          '","sdid":"' +
          $parent.Util.getSdid() +
          '","data":' +
          data +
          '}'
      );
    },
    /**
     * @description 消息解码
     * @param {sting} input - JSON格式消息字符串
     * @returns {object} - 返回JSON对象
     * @example
     * HyUDBWebSDK.Message.decode('{}');
     */
    decode: function (input) {
      try {
        return window.JSON && window.JSON.parse
          ? window.JSON.parse(decodeURIComponent(input))
          : new Function('return ' + decodeURIComponent(input))();
      } catch (except) {
        return undefined;
      }
    },
    /**
     * @description 错误消息
     * @param {sting} uri - 错误消息命令
     * @param {sting} code - 错误消息子命令
     * @param {sting} message - 错误消息体
     * @example
     * HyUDBWebSDK.Message.error('COR_SND','NOTFOUND','');
     */
    error: function (uri, code, message) {
      var $this = this,
        $resource = $this.$resource,
        $global = $this.$global,
        $report = $this.$report,
        $item = $this.$item,
        $cookie = $this.$cookie,
        $exchange = {
          uri: $resource.URI[uri],
          version: $resource.VERSION,
          context:
            'ER-' +
            $item.convert($cookie.get('udb_guiddata')) +
            '-' +
            $item.convert($cookie.get('__yamid_new')) +
            '-' +
            $item.convert($cookie.get('guid')),
          returnCode: $resource.EXCEPT[uri][code],
          message: $item.convert(message),
          description:
            $resource.MESSAGE[
              $global.lcid == '2052' || $global.lcid == '1033'
                ? $global.lcid
                : '1033'
            ][uri][code]
        };
      try {
        $report.error({ uri: $resource.URI[uri] }, $exchange);
      } catch (except) {}
      if (
        uri != 'SDK_INF' &&
        $global.hasOwnProperty('error') &&
        $global.error &&
        typeof $global.error == 'function'
      )
        $global.error.call(window, $exchange);
    },
    /**
     * @description JSON对象转化为JSON字符串
     * @param {object} obj - JSON对象
     * @example
     * HyUDBWebSDK.Message.stringify({});
     */
    stringify: function (obj) {
      if (window.JSON && window.JSON.stringify) return JSON.stringify(obj);
      else {
        var t = typeof obj;
        if (t != 'object' || obj == null) {
          if (t == 'string') obj = '"' + obj + '"';
          return String(obj);
        } else {
          var n,
            v,
            json = [],
            arr = obj && obj.constructor == Array;
          var self = arguments.callee;
          for (n in obj) {
            v = obj[n];
            t = typeof v;
            if (obj.hasOwnProperty(n)) {
              if (t == 'string') v = '"' + v + '"';
              else if (t == 'object' && v !== null) v = self(v);
              json.push((arr ? '' : '"' + n + '":') + String(v));
            }
          }
          return (arr ? '[' : '{') + String(json) + (arr ? ']' : '}');
        }
      }
    }
  };
  /**
   * @description PC对象，对外提供方法
   */
  HyUDBWebSDK.prototype.PC = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.PC.init(this);
     */
    init: function ($this) {
      this.version = '';
      this.jsType = 0;
      this.$parent = $this;
      this.$message = $this.Message;
      this.$resource = $this.JSSDK.Resource;
    },
    /**
     * @description 具体PC端能力
     * @example
     * HyUDBWebSDK.PC.able();
     */
    able: function () {
      if (
        this.version &&
        this.version != '' &&
        this.version.slice(0, 'HYUDBMSDK'.length) == 'HYUDBMSDK'
      )
        return true;
      else return false;
    },
    /**
     * @description 检测
     * @param {string} options.name -参数名称
     * @param {*} options.callback -回调方法
     * @example
     * HyUDBWebSDK.PC.check(options);
     */
    check: function (options) {
      var $this = this,
        $message = $this.$message;
      if (!window.external) {
        return false;
      }
      try {
        $this.version = window.external.HYUDBMSDKVersion;
        if ($this.version != undefined && $this.version != '') {
          $this.version = $this.version.toUpperCase();
          if ($this.jsType == 0) $this.jsType = 1;
          if (
            options &&
            options.success &&
            typeof options.success == 'function'
          )
            options.success.call(window, $this);
          try {
            $message.error('SDK_INF', 'PCECHK', $this.version);
          } catch (except) {}
        }
      } catch (except) {
        $this.version = '';
        $message.error(
          'COR_PCE',
          'NOTSUPT',
          encodeURIComponent(except.message)
        );
      }
    },
    /**
     * @description 获取值
     * @param {string} name -参数名称
     * @param {*} callback - 回调方法
     * @returns {string} - 参数值
     * @example
     * HyUDBWebSDK.PC.get("qrcommon",function(response){});
     */
    get: function (name, callback) {
      if (name && name == 'qrcommon') {
        if (this.jsType == 1) {
          var qrcommon = window.external.HYUDBMSDKQUrlCommon;
          if (callback && typeof callback == 'function')
            callback.call(window, qrcommon);
        }
        return undefined;
      } else if (name && name == 'version') return this.version;
      return undefined;
    },
    /**
     * @description 消息处理，回调移动端方法
     * @param {string} uri - 操作命令，会转化为回调类型（1：第三方登录，2：第三方登录邦定，3：手机登录，4：通行证登录，5：匿名登录，6：邮箱登录，7：手机注册，8：通行证注册，9：邮箱注册，10：更新密码，11：找回密码）
     * @param {string} wupData - 回调值
     * @example
     * HyUDBWebSDK.PC.message(uri,wupData);
     */
    message: function (uri, wupData) {
      var $this = this,
        $resource = $this.$resource,
        $message = $this.$message;
      if ($resource.hasOwnProperty('MURTYPE') && $resource.MURTYPE[uri]) {
        if ($this.jsType == 1) {
          window.external.HYUDBMSDKCallback(wupData);
          try {
            $message.error(
              'SDK_INF',
              'PCECAL',
              uri + '-' + $resource.MURTYPE[uri]
            );
          } catch (except) {}
        }
      }
    },
    /**
     * @description 快速登录
     * @param {string} uid -用户ID
     * @param {string} ticket -Ticket
     * @example
     * HyUDBWebSDK.PC.quick("1234567",'dddasdfasfsadfsdfsd');
     */
    quick: function (uid, ticket) {
      if (this.jsType == 1) window.external.HYUDBMSDKQuickLogin(uid, ticket);
    },
    /**
     * @description 快速登录
     * @param {string} url -打开网址
     * @example
     * HyUDBWebSDK.PC.openUrl('http://www.huya.com');
     */
    openUrl: function (url) {
      if (this.jsType == 1) window.external.HYUDBMSDKOpenUrl(url);
    },
    /**
     * @description 关闭窗口
     * @example
     * HyUDBWebSDK.PC.close();
     */
    close: function () {
      if (this.jsType == 1) window.external.HYUDBMSDKClose();
    }
  };
  /**
   * @description Mobile对象，对外提供方法
   */
  HyUDBWebSDK.prototype.Mobile = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Mobile.init(this);
     */
    init: function ($this) {
      this.version = '';
      this.jsType = 0;
      this.hasLogin = false;
      this.$parent = $this;
      this.$message = $this.Message;
      this.$resource = $this.JSSDK.Resource;
      this.JSBridge.init(this);
    },
    /**
     * @description 具体移动端能力
     * @example
     * HyUDBWebSDK.Mobile.able();
     */
    able: function () {
      if (
        this.version &&
        this.version != '' &&
        this.version.slice(0, 'HYUDBMSDK'.length) == 'HYUDBMSDK'
      )
        return true;
      else return false;
    },
    /**
     * @description 是否登录
     * @example
     * HyUDBWebSDK.Mobile.login();
     */
    login: function () {
      return this.hasLogin;
    },
    /**
     * @description 检测
     * @param {string} options.name -参数名称
     * @param {*} options.callback -回调方法
     * @example
     * HyUDBWebSDK.Mobile.check(options);
     */
    check: function (options) {
      var $this = this,
        $message = $this.$message;
      try {
        if (options && options.name == 'huya')
          $this.JSBridge.setup(function ($bridge) {
            $bridge.invoke(
              'HYUDBMSDKVersion',
              {},
              {
                success: function (response) {
                  $this.version = response.version.toUpperCase();
                  if ($this.jsType == 0) $this.jsType = 1;
                  if (
                    options &&
                    options.success &&
                    typeof options.success == 'function'
                  )
                    options.success.call(window, $this);
                  try {
                    $message.error('SDK_INF', 'MOBLCHK', $this.version);
                  } catch (except) {}
                }
              }
            );
          });
        else
          $this.setup(function ($bridge) {
            $bridge.callHandler('HYUDBMSDKVersion', function (response) {
              $this.version = response.toUpperCase();
              if ($this.jsType == 0) $this.jsType = 2;
              if (
                options &&
                options.success &&
                typeof options.success == 'function'
              )
                options.success.call(window, $this);
              try {
                $message.error('SDK_INF', 'MOBLCHK', $this.version);
              } catch (except) {}
            });
          });
      } catch (except) {
        $this.version = '';
        $message.error(
          'COR_MBL',
          'NOTSUPT',
          encodeURIComponent(except.message)
        );
      }
    },
    /**
     * @description 获取值
     * @param {string} name -参数名称
     * @param {*} callback - 回调方法
     * @returns {string} - 参数值
     * @example
     * HyUDBWebSDK.Mobile.get("common",function(response){});
     */
    get: function (name, callback) {
      if (name && name == 'common') {
        if (this.jsType == 2)
          this.setup(function (bridge) {
            bridge.callHandler('HYUDBMSDKCommon', function (response) {
              if (callback && typeof callback == 'function')
                callback.call(window, response);
            });
          });
        else if (this.jsType == 1)
          this.JSBridge.invoke(
            'HYUDBMSDKCommon',
            {},
            {
              success: function (response) {
                if (callback && typeof callback == 'function')
                  callback.call(window, response.common);
              }
            }
          );
        return undefined;
      } else if (name && name == 'qrcommon') {
        if (this.jsType == 2)
          this.setup(function (bridge) {
            bridge.callHandler('HYUDBMSDKQUrlCommon', function (response) {
              if (callback && typeof callback == 'function')
                callback.call(window, response);
            });
          });
        else if (this.jsType == 1)
          this.JSBridge.invoke(
            'HYUDBMSDKQUrlCommon',
            {},
            {
              success: function (response) {
                if (callback && typeof callback == 'function')
                  callback.call(window, response.common);
              }
            }
          );
        return undefined;
      } else if (name && name == 'version') return this.version;
      return undefined;
    },
    /**
     * @description 消息处理，回调移动端方法
     * @param {string} uri - 操作命令，会转化为回调类型（1：第三方登录，2：第三方登录邦定，3：手机登录，4：通行证登录，5：匿名登录，6：邮箱登录，7：手机注册，8：通行证注册，9：邮箱注册，10：更新密码，11：找回密码）
     * @param {string} wupData - 回调值
     * @example
     * HyUDBWebSDK.Mobile.message(uri,wupData);
     */
    message: function (uri, wupData) {
      var $this = this,
        $resource = $this.$resource,
        $message = $this.$message;
      if ($resource.hasOwnProperty('MURTYPE') && $resource.MURTYPE[uri]) {
        if (this.jsType == 2)
          $this.setup(function (bridge) {
            bridge.callHandler(
              'HYUDBMSDKCallback',
              '{"type":"' +
                $resource.MURTYPE[uri] +
                '","data":"' +
                encodeURIComponent(wupData) +
                '"}',
              function (response) {
                try {
                  $message.error(
                    'SDK_INF',
                    'MOBLCAL',
                    uri + '-' + $resource.MURTYPE[uri]
                  );
                } catch (except) {}
              }
            );
          });
        else if (this.jsType == 1)
          $this.JSBridge.invoke(
            'HYUDBMSDKCallback',
            { type: $resource.MURTYPE[uri], data: encodeURIComponent(wupData) },
            {
              success: function (response) {
                try {
                  $message.error(
                    'SDK_INF',
                    'MOBLCAL',
                    uri + '-' + $resource.MURTYPE[uri]
                  );
                } catch (except) {}
              }
            }
          );
      }
    },
    /**
     * @description 关闭窗口
     * @example
     * HyUDBWebSDK.Mobile.close();
     */
    close: function () {
      var $this = this;
      if (this.jsType == 2)
        $this.setup(function (bridge) {
          bridge.callHandler('HYUDBMSDKClose', function (response) {});
        });
      else if (this.jsType == 1)
        $this.JSBridge.invoke(
          'HYUDBMSDKClose',
          {},
          { success: function (response) {} }
        );
    },
    /**
     * @description 显示登录窗口
     * @param {*} callback - 回调方法
     * @example
     * HyUDBWebSDK.Mobile.showLogin();
     */
    showLogin: function (callback) {
      var $this = this;
      if ($this.jsType == 2)
        $this.setup(function (bridge) {
          bridge.callHandler('showLogin', function (response) {
            if (callback && typeof callback == 'function')
              callback.call(window, response);
          });
        });
      else if ($this.jsType == 1)
        $this.JSBridge.invoke(
          'showLogin',
          {},
          {
            success: function (response) {
              if (callback && typeof callback == 'function')
                callback.call(window, response);
            }
          }
        );
    },
    /**
     * @description 判断登录
     * @param {*} callback - 回调方法
     * @example
     * HyUDBWebSDK.Mobile.isLogin();
     */
    isLogin: function (callback) {
      var $this = this;
      if ($this.jsType == 2)
        $this.setup(function (bridge) {
          bridge.callHandler('isLogin', function (response) {
            $this.hasLogin = response.isLogin;
            if (callback && typeof callback == 'function')
              callback.call(window, response);
          });
        });
      else if ($this.jsType == 1)
        $this.JSBridge.invoke(
          'isLogin',
          {},
          {
            success: function (response) {
              $this.hasLogin = response.isLogin;
              if (callback && typeof callback == 'function')
                callback.call(window, response);
            }
          }
        );
    },
    /**
     * @description 用户信息
     * @param {*} callback - 回调方法
     * @example
     * HyUDBWebSDK.Mobile.userInfo();
     */
    userInfo: function (callback) {
      var $this = this;
      if ($this.jsType == 2)
        $this.setup(function (bridge) {
          bridge.callHandler('getCurrentUserInfo', function (response) {
            if (callback && typeof callback == 'function')
              callback.call(window, response);
          });
        });
      else if ($this.jsType == 1)
        $this.JSBridge.invoke(
          'getCurrentUserInfo',
          {},
          {
            success: function (response) {
              if (callback && typeof callback == 'function')
                callback.call(window, response);
            }
          }
        );
    },
    /**
     * @description APP信息
     * @param {*} callback - 回调方法
     * @example
     * HyUDBWebSDK.Mobile.appInfo();
     */
    appInfo: function (callback) {
      var $this = this;
      if ($this.jsType == 2)
        $this.setup(function (bridge) {
          bridge.callHandler('getAppInfo', function (response) {
            if (callback && typeof callback == 'function')
              callback.call(window, response);
          });
        });
      else if ($this.jsType == 1)
        $this.JSBridge.invoke(
          'getAppInfo',
          {},
          {
            success: function (response) {
              if (callback && typeof callback == 'function')
                callback.call(window, response);
            }
          }
        );
    },
    /**
     * @description 显示Toast
     * @param {string} toast - 提示消息
     * @param {*} callback - 回调方法
     * @example
     * HyUDBWebSDK.Mobile.showToast();
     */
    showToast: function (toast, callback) {
      var $this = this;
      if ($this.jsType == 2)
        $this.setup(function (bridge) {
          bridge.callHandler('showToast', { message: toast }, function (
            response
          ) {
            if (callback && typeof callback == 'function')
              callback.call(window, response);
          });
        });
      else if ($this.jsType == 1)
        $this.JSBridge.invoke(
          'showToast',
          { message: toast },
          {
            success: function (response) {
              if (callback && typeof callback == 'function')
                callback.call(window, response);
            }
          }
        );
    },
    /**
     * @description 隐藏控件
     * @param {string} toast - 提示消息
     * @param {*} callback - 回调方法
     * @example
     * HyUDBWebSDK.Mobile.hideCtrl();
     */
    hideCtrl: function () {
      var $this = this;
      if ($this.jsType == 2) {
        $this.setup(function (bridge) {
          bridge.callHandler(
            'setShareInfo',
            { isShow: false, url: '' },
            function (response) {}
          );
        });
        $this.setup(function (bridge) {
          bridge.callHandler(
            'setAllowRefresh',
            { allowRefresh: false },
            function (response) {}
          );
        });
      } else if ($this.jsType == 1) {
        $this.JSBridge.invoke('setShareInfo', { isShow: false, url: '' }, {});
        $this.JSBridge.invoke('setAllowRefresh', { allowRefresh: false }, {});
      }
    },
    /**
     * @description 初始化Bridge方法，WebViewJavascriptBridge，兼容Android、IOS
     * @param {*} callback - 回调方法
     * @example
     * HyUDBWebSDK.Mobile.setup(function(){bridge});
     */
    setup: function (callback) {
      var $this = this,
        $parent = $this.$parent;
      if (
        $this.device().mobile ||
        $this.device().android ||
        $this.device().ios
      ) {
        if (window.WebViewJavascriptBridge)
          return callback(WebViewJavascriptBridge);
        if (window.WVJBCallbacks) return window.WVJBCallbacks.push(callback);
        window.WVJBCallbacks = [callback];
        $parent.Html.add({
          tag: 'iframe',
          pos: 'document',
          urlList: [
            {
              id: '__HUYAJSBridgeCommon_DomReady',
              url: 'wvjbscheme://__BRIDGE_LOADED__'
            }
          ]
        });
      }
    },
    /**
     * @description 移动端终端设备
     * @example
     * HyUDBWebSDK.Mobile.device();
     */
    device: function () {
      var agent = navigator.userAgent;
      return {
        trident: agent.indexOf('Trident') > -1 /*IE内核*/,
        presto: agent.indexOf('Presto') > -1 /*opera内核*/,
        webKit: agent.indexOf('AppleWebKit') > -1 /*苹果、谷歌内核*/,
        gecko:
          agent.indexOf('Gecko') > -1 &&
          agent.indexOf('KHTML') == -1 /*火狐内核*/,
        mobile: !!agent.match(/AppleWebKit.*Mobile.*/) /*是否为移动终端*/,
        ios: !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) /*ios终端*/,
        android:
          agent.indexOf('Android') > -1 ||
          agent.indexOf('Adr') > -1 /*android终端*/,
        iPhone: agent.indexOf('iPhone') > -1 /*是否为iPhone或者QQHD浏览器*/,
        iPad: agent.indexOf('iPad') > -1 /*是否iPad*/,
        webApp:
          agent.indexOf('Safari') == -1 /*是否web应该程序，没有头部与底部*/,
        weixin:
          agent.indexOf('MicroMessenger') > -1 /*是否微信(2015-01-22新增)*/,
        qq: agent.match(/\sQQ/i) == 'qq' /*是否QQ*/,
        uc: agent.indexOf('UCBrowser') > -1 /*是否UC浏览器*/
      };
    },
    /**
     * @description 删除加载
     * @example
     * HyUDBWebSDK.Mobile.remove();
     */
    remove: function () {
      this.$parent.Html.remove({ id: '__HUYAJSBridgeCommon_DomReady' });
    },
    /**
     * @description JSBridge对象，对外提供短信、验证等方法
     */
    JSBridge: (prototype = {
      /**
       * @description 初始化实例对象
       * @param {object} $this - 传递父对象
       * @example
       * HyUDBWebSDK.Mobile.JSBridge.init(this);
       */
      init: function ($this) {
        this.$parent = $this;
        this.Queue.init(this);
      },
      /**
       * @description 初始化完成方法
       * @param {*} callback - 回调方法
       * @example
       * HyUDBWebSDK.Mobile.JSBridge.ready(function(bridge){});
       */
      ready: function (callback) {
        var $this = this,
          $parents = $this.$parent.$parent;
        $this.Queue.flush();
        $this.invoke(
          'ready',
          { usePostMessageByDefault: true },
          { success: function () {} }
        );
        if (callback && typeof callback == 'function')
          callback.call(window, $this);
      },
      /**
       * @description 初始化Bridge方法，HYJSBridge，兼容Android、IOS
       * @param {*} callback - 回调方法
       * @example
       * HyUDBWebSDK.Mobile.JSBridge.setup(function(bridge){});
       */
      setup: function (callback) {
        var $this = this,
          $parent = $this.$parent,
          $parents = $parent.$parent;
        if ($parent.device().mobile) {
          if (window.KiwiJSBridge) $this.ready(callback);
          else if (document.addEventListener)
            document.addEventListener(
              'KiwiWebViewJavascriptBridgeReady',
              function () {
                $this.ready(callback);
              },
              false
            );
          if ($parent.device().android)
            $parents.Html.add({
              tag: 'script',
              urlList: [
                {
                  id: '__HUYAJSBridgeCommon_DomReady',
                  url: 'KWBridge://huya.com/load_KwBridge.js'
                }
              ]
            });
          else if ($parent.device().ios)
            $parents.Html.add({
              tag: 'iframe',
              pos: 'document',
              urlList: [
                {
                  id: '__HUYAJSBridgeCommon_DomReady',
                  url: 'kiwi://DOMContentLoaded'
                }
              ]
            });
        }
      },
      /**
       * @description 回调处理方法
       * @param {string} func - 函数名
       * @param {JSBridgeReqParam} params - 调用参数对象
       * @param {JSBridgeRespParam} response - 调用返回的结果
       * @example
       * HyUDBWebSDK.Mobile.JSBridge.handle("UDBVerson",{},{});
       */
      handle: function (func, params, response) {
        switch (response.status) {
          case 'ok':
            if (params.success && typeof params.success == 'function')
              params.success.call(window, response);
            break;
          case 'cancel':
            if (params.cancel && typeof params.cancel == 'function')
              params.cancel.call(window, esponse);
            break;
          default:
            if (params.fail && typeof params.fail == 'function')
              params.fail.call(window, response);
            break;
        }
        if (params.complete && typeof params.complete == 'function')
          params.complete.call(window, response);
      },
      /**
       * @description 调用方法
       * @param {string} func - 函数名
       * @param {object} options - 包含参数的对象
       * @param {JSBridgeReqParam} params - 调用参数对象
       * @example
       * HyUDBWebSDK.Mobile.JSBridge.invoke("UDBVerson",{},{});
       */
      invoke: function (func, options, params) {
        var $this = this,
          $parents = $this.$parent.$parent;
        if (window.KiwiJSBridge)
          setTimeout(function () {
            options = $parents.Util.extend(options, {
              usePostMessageByDefault: true,
              useProcolByDefault: false,
              useContextByDefault: false
            });
            window.KiwiJSBridge.call(func, options, function (response) {
              $this.handle(func, params, response);
            });
          }, 0);
        else $this.Queue.call(func, options, params);
      },
      /**
       * @description 监听方法
       * @param {string} eventId - 事件名
       * @param {object} params - 包含参数的对象
       * @param {object} callback - 回调函数
       * @example
       * HyUDBWebSDK.Mobile.JSBridge.on("UDBVerson",{},function(){});
       */
      on: function (eventId, params, callback) {
        var $this = this;
        if (window.KiwiJSBridge)
          window.KiwiJSBridge.on(eventId, params, callback);
        else $this.Queue.on(eventId, params, callback);
      },
      /**
       * @description 取消监听方法
       * @param {string} eventId - 事件名
       * @param {object} params - 包含参数的对象
       * @param {object} callback - 回调函数
       * @example
       * HyUDBWebSDK.Mobile.JSBridge.off("UDBVerson",{},function(){});
       */
      off: function (eventId, params, callback) {
        var $this = this;
        if (window.KiwiJSBridge)
          window.KiwiJSBridge.off(eventId, params, callback);
        else $this.Queue.off(eventId, params, callback);
      },
      /**
       * @description Queue对象，对外提供调用call等方法
       */
      Queue: (prototype = {
        /**
         * @description 初始化实例对象
         * @param {object} $this - 传递父对象
         * @example
         * HyUDBWebSDK.Mobile.JSBridge.Queue.init(this);
         */
        init: function ($this) {
          this.$parent = $this;
          this.queue = [];
        },
        /**
         * @description 调用方法
         * @param {string} func - 函数名
         * @param {object} options - 包含参数的对象
         * @param {JSBridgeReqParam} params - 调用参数对象
         * @example
         * HyUDBWebSDK.Mobile.JSBridge.Queue.call("UDBVerson",{},{});
         */
        call: function (func, options, params) {
          this.queue.push({
            type: 'call',
            func: func,
            options: options,
            params: params
          });
        },
        /**
         * @description 监听方法
         * @param {string} eventId - 事件名
         * @param {object} params - 包含参数的对象
         * @param {object} callback - 回调函数
         * @example
         * HyUDBWebSDK.Mobile.JSBridge.Queue.on("UDBVerson",{},function(){});
         */
        on: function (eventId, options, params) {
          this.queue.push({
            type: 'on',
            eventId: eventId,
            params: params,
            callback: callback
          });
        },
        /**
         * @description 取消监听方法
         * @param {string} eventId - 事件名
         * @param {object} params - 包含参数的对象
         * @param {object} callback - 回调函数
         * @example
         * HyUDBWebSDK.Mobile.JSBridge.Queue.off("UDBVerson",{},function(){});
         */
        off: function (func, options, params) {
          this.queue.push({
            type: 'off',
            eventId: eventId,
            params: params,
            callback: callback
          });
        },
        /**
         * @description 清除消息队列
         * @example
         * HyUDBWebSDK.Mobile.JSBridge.Queue.flush();
         */
        flush: function () {
          var $this = this,
            $parent = $this.$parent;
          for (var i = 0; i < $this.queue.length; i++) {
            var msg = $this.queue[i];
            if (msg.type == 'call' && window.KiwiJSBridge)
              $parent.call(msg.func, func.options, func.params);
            else if (msg.type == 'on' && window.KiwiJSBridge)
              $parent.on(msg.eventId, msg.params, msg.callback);
            else if (msg.type == 'off' && window.KiwiJSBridge)
              $parent.off(msg.eventId, msg.params, msg.callback);
          }
          this.queue = [];
        }
      })
    })
  };
  /**
   * @description Cookie对象，对外提供get、set、remove方法
   */
  HyUDBWebSDK.prototype.Cookie = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Cookie.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
      this.$global = $this.JSSDK.Global;
    },
    /**
     * @description 获取
     * @param {string} name - Cookie名称
     * @returns {string} - Cookie值
     * @example
     * HyUDBWebSDK.Cookie.get("cookieName");
     */
    get: function (name) {
      var nameEq = name + '=';
      var ckArray = document.cookie.split(';');
      for (var i = 0; i < ckArray.length; i++) {
        var citem = ckArray[i];
        while (citem.charAt(0) == ' ') citem = citem.substring(1, citem.length);
        if (citem.indexOf(nameEq) == 0)
          return citem.substring(nameEq.length, citem.length);
      }
      return undefined;
    },
    /**
     * @description 设置
     * @param {string} name - Cookie名称
     * @param {string} value - Cookie值
     * @param {string} domain - Domain值
     * @param {number} days - Cookie有效天数
     * @example
     * HyUDBWebSDK.Cookie.set("cookieName","cookieValue","huya.com",1);
     */
    set: function (name, value, domain, days) {
      var expires = '';
      if (days != undefined && days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
      }
      document.cookie =
        name +
        '=' +
        value +
        expires +
        '; domain=' +
        (domain != undefined &&
        domain != '' &&
        document.domain.toUpperCase().indexOf(domain.toUpperCase()) > -1
          ? domain
          : document.domain) +
        '; path=/';
    },
    /**
     * @description 删除
     * @param {string} name - Cookie名称
     * @example
     * HyUDBWebSDK.Cookie.remove("cookieName");
     */
    remove: function (name) {
      this.set(name, '', undefined, -1);
    },
    /**
     * @description cookie写或删除地址
     * @param {string} sub - 子域名
     * @param {string} url - 操作尾地址
     * @param {number} type - 操作尾地址
     * @returns {object} - 返回操作地址数组
     * @example
     * HyUDBWebSDK.Cookie.url("udblgn","/web/logout");
     */
    url: function (sub, url, type) {
      var $this = this,
        array = new Array(),
        $global = $this.$global;
      if (!type || (type && type == '0'))
        array.push($global.protocol + '://' + sub + '.' + $global.domain + url);
      if (
        (!type || (type && type == '0')) &&
        $global.domainList &&
        $global.domainList != ''
      ) {
        var item = $global.domainList.split(',');
        for (var i = 0; i < item.length; i++)
          array.push($global.protocol + '://' + sub + '.' + item[i] + url);
      }
      return array;
    }
  };
  /**
   * @description Report对象，对外数据上报方法
   */
  HyUDBWebSDK.prototype.Report = {
    /**
     * @description 初始化实例对象
     * @param {object} $this - 传递父对象
     * @example
     * HyUDBWebSDK.Report.init(this);
     */
    init: function ($this) {
      this.$parent = $this;
      this.$item = $this.Item;
      this.$message = $this.Message;
      this.$cookie = $this.Cookie;
      this.$global = $this.JSSDK.Global;
      this.$resource = $this.JSSDK.Resource;
      this.$util = $this.Util;
      this.Event.init(this);
    },
    /**
     * @description 错误日志上报
     * @param {object} variable - 本地消息
     * @param {object} message - 回调消息
     * HyUDBWebSDK.Report.error({},{});
     */
    error: function (variable, message) {
      this.send(this.$message.stringify(this.format(variable, message)));
    },
    /**
     * @description 正常日志上报
     * @param {object} variable - 本地消息
     * @param {object} message - 回调消息
     * @example
     * HyUDBWebSDK.Report.info({},{});
     */
    info: function (variable, message) {
      if (
        message.uri != '70004' ||
        (message.uri == '70004' &&
          message.returnCode == '0' &&
          message.hasOwnProperty('data') &&
          message.data != undefined &&
          message.data.hasOwnProperty('stage') &&
          message.data.stage != '0' &&
          message.data.stage != '1')
      )
        this.send(this.$message.stringify(this.format(variable, message)));
    },
    /**
     * @description 发送日志
     * @param {string} message - 日志消息
     * @example
     * HyUDBWebSDK.Report.send('发送失败');
     */
    send: function (message) {
      var $this=this,$global=$this.$global;
      try {
        var head = document.getElementsByTagName('head')[0],
            script = document.createElement('script');
            head.appendChild(script);
            if (!$global.logTest) {
              script.src="https://udblog.nimo.tv/web/log/report?request="+encodeURIComponent(message);
            } else {
              script.src="//udblog-test.nimo.tv/web/log/report?request="+encodeURIComponent(message);
            }
        head.removeChild(script);
      } catch (except) {}
    },
    /**
     * @description 日志格式
     * @param {object} variable - 本地消息
     * @param {object} message - 回调消息
     * @returns {object} - 返回日志对象
     * @example
     * HyUDBWebSDK.Report.format();
     */
    format: function (variable, message) {
      var $weblog = {},
        $jsonlog = {},
        $clone = {};
      try {
        if (message != undefined) {
          $clone = this.$message.decode(this.$message.stringify(message));
          this.$util.reduce($clone);
        }
      } catch (except) {}
      $weblog['topic'] = 'huyaudb';
      $jsonlog['term_type'] = '4';
      $jsonlog['net_type'] = 2;
      $jsonlog['carrier_type'] = 2;
      try {
        $jsonlog['device_id'] =
          this.$item &&
          this.$item != undefined &&
          this.$cookie &&
          this.$cookie != undefined
            ? this.$item.convert(this.$cookie.get('udb_guiddata'), '')
            : '';
      } catch (except) {
        $jsonlog['device_id'] = '';
      }
      try {
        $jsonlog['device_name'] =
          navigator && navigator != undefined ? navigator.platform : '';
      } catch (except) {
        $jsonlog['device_name'] = '';
      }
      try {
        $jsonlog['system_info'] =
          navigator && navigator != undefined ? navigator.userAgent : '';
      } catch (except) {
        $jsonlog['system_info'] = '';
      }
      try {
        $jsonlog['appid'] =
          this.$item &&
          this.$item != undefined &&
          this.$global &&
          this.$global != undefined
            ? this.$item.convert(this.$global.appid, '0')
            : '0';
      } catch (except) {
        $jsonlog['appid'] = '0';
      }
      try {
        $jsonlog['sdk_ver'] =
          this.$item &&
          this.$item != undefined &&
          this.$resource &&
          this.$resource != undefined
            ? this.$item.convert(this.$resource.VERSION, '1.9')
            : '1.9';
      } catch (except) {
        $jsonlog['sdk_ver'] = '1.9';
      }
      try {
        $jsonlog['local_time'] = new Number(
          this.$item &&
          this.$item != undefined &&
          this.$util &&
          this.$util != undefined
            ? this.$item.convert(this.$util.guid(2), '0')
            : '0'
        );
      } catch (except) {
        $jsonlog['local_time'] = 0;
      }
      try {
        $jsonlog['uid'] = new Number(
          this.$item &&
          this.$item != undefined &&
          this.$cookie &&
          this.$cookie != undefined
            ? this.$item.convert(
                this.$cookie.get('udb_uid'),
                $clone.hasOwnProperty('data') &&
                  $clone.data &&
                  $clone.data.hasOwnProperty('uid') &&
                  $clone.data.uid
                  ? $clone.data.uid
                  : '0'
              )
            : $clone.hasOwnProperty('data') &&
              $clone.data &&
              $clone.data.hasOwnProperty('uid') &&
              $clone.data.uid
            ? $clone.data.uid
            : '0'
        );
      } catch (except) {
        $jsonlog['uid'] = 0;
      }
      try {
        $jsonlog['uri'] =
          variable &&
          variable != undefined &&
          variable.hasOwnProperty('uri') &&
          variable.uri &&
          variable.uri != undefined
            ? variable.uri
            : '0';
      } catch (except) {
        $jsonlog['uri'] = '0';
      }
      try {
        $jsonlog['ui_cmd'] =
          location &&
          location != undefined &&
          location.href &&
          location.href != undefined
            ? encodeURIComponent(location.href)
            : '';
      } catch (except) {
        $jsonlog['ui_cmd'] = '';
      }
      try {
        $jsonlog['context'] =
          $clone.hasOwnProperty('context') &&
          $clone.context &&
          $clone.context != ''
            ? $clone.context
            : this.$item &&
              this.$item != undefined &&
              this.$cookie &&
              this.$cookie != undefined
            ? 'ER-' +
              this.$item.convert(this.$cookie.get('udb_guiddata')) +
              '-' +
              this.$item.convert(this.$cookie.get('__yamid_new')) +
              '-' +
              this.$item.convert(this.$cookie.get('guid'))
            : '';
      } catch (except) {
        $jsonlog['context'] = '';
      }
      try {
        $jsonlog['rsp_time'] = new Number(
          this.$item &&
          this.$item != undefined &&
          this.$util &&
          this.$util != undefined &&
          variable &&
          variable != undefined &&
          variable.hasOwnProperty('time') &&
          variable.time &&
          variable.time != undefined
            ? this.$item.convert(this.$util.guid(2) - variable.time, '0')
            : '0'
        );
      } catch (except) {
        $jsonlog['rsp_time'] = 0;
      }
      try {
        $jsonlog['rescode'] =
          $clone.hasOwnProperty('returnCode') && $clone.returnCode
            ? $clone.returnCode
            : '0';
      } catch (except) {
        $jsonlog['rescode'] = '0';
      }
      try {
        $jsonlog['strategy'] =
          $clone.hasOwnProperty('data') &&
          $clone.data &&
          $clone.data.hasOwnProperty('strategys') &&
          $clone.data.strategys != null
            ? this.$message.stringify($clone.data.strategys)
            : '';
      } catch (except) {
        $jsonlog['strategy'] = '';
      }
      try {
        $jsonlog['detail'] = this.$message.stringify($clone);
      } catch (except) {
        $jsonlog['detail'] = '';
      }
      try {
        $weblog['json'] = this.$message.stringify($jsonlog);
      } catch (except) {
        $weblog['json'] = '';
      }
      return $weblog;
    },
    /**
     * @description Event对象，对外提供调用click等方法
     */
    Event: (prototype = {
      /**
       * @description 初始化实例对象
       * @param {object} $this - 传递父对象
       * @example
       * HyUDBWebSDK.Report.Event.init(this);
       */
      init: function ($this) {
        this.$parent = $this;
        this.$message = $this.$message;
      },
      /**
       * @description 点击事件上报
       * @param {string} message - 事件消息
       * HyUDBWebSDK.Report.Event.click('扫码事件');
       */
      click: function (message) {
        this.$message.error('EVT_RPT', 'PGECLK', message);
      }
    })
  };
  /**
   * @description 创建对HyUDB象
   * @param {json} Request:{"uri":"","version":"","context":"","appId":"","lcid":"","data":{"mobile":"BASE64(WUP)"}};
   * @param {json} Response:{"uri":"","version":"","context":"","returnCode":"","message":"","description":"","data":{}};
   */
  window.HyUDBWebErr = '';
  window.HyUDBWebSDK = new HyUDBWebSDK();
  //window.HpUDBWebSDK = new HyUDBWebSDK();
  //window.HwUDBWebSDK = new HyUDBWebSDK();

  /**
   * @description JS错误捕获
   * @param {String}  errorMessage   错误信息
   * @param {String}  scriptURI      出错的文件
   * @param {Long}    lineNumber     出错代码的行号
   * @param {Long}    columnNumber   出错代码的列号
   * @param {Object}  errorObj       错误的详细信息，Anything
   */
  window.onerror = function (
    errorMessage,
    scriptURI,
    lineNumber,
    columnNumber,
    errorObj
  ) {
    try {
      var _message = encodeURIComponent(
          errorMessage +
            '-' +
            scriptURI +
            '-' +
            lineNumber +
            '-' +
            columnNumber +
            '-' +
            errorObj
        ),
        _error = '300000-' + _message,
        _context = 'JS-',
        _page = '';
      if (window.HyUDBWebErr != _error) {
        window.HyUDBWebErr = _error;
        try {
          _page = encodeURIComponent(location.href);
          if (_page && _page != undefined && _page != '') {
            _page = _page.toLowerCase();
          } else {
            _page = '';
          }
          var $item = window.HyUDBWebSDK.Item,
            $cookie = window.HyUDBWebSDK.Cookie;
          _context =
            'JS-' +
            $item.convert($cookie.get('udb_guiddata')) +
            '-' +
            $item.convert($cookie.get('__yamid_new')) +
            '-' +
            $item.convert($cookie.get('guid'));
        } catch (except) {}
        if (
          _page &&
          _page != undefined &&
          _page != '' &&
          _page.indexOf('udblgn.') > -1 &&
          _page.indexOf('udb3lgn.') > -1 &&
          _page.indexOf('udbsec.') > -1 &&
          _page.indexOf('udbapi.') > -1 &&
          _page.indexOf('udbreg.') > -1 &&
          _page.indexOf('aq.') > -1
        )
          window.HyUDBWebSDK.Report.error(
            { uri: 300000 },
            {
              uri: 300000,
              version: '2.1',
              context: _context,
              returnCode: 300000,
              message: encodeURIComponent(_message),
              description: 'javascript script error',
              data: { page: _page }
            }
          );
      }
    } catch (except) {}
  };
})(window, document);
