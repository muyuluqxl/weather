var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    console.log(req.body);
    res.send('\n' +
        '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
        '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>中国气象局--国家气候中心--气候系统监测·诊断·预测·评估</title>\n' +
        '    <link rel="stylesheet" href="../css/index2018.css?ver=2019110710">\n' +
        '    <link rel="stylesheet" href="../css/idangerous.swiper2.7.6.css">\n' +
        '    <link rel="stylesheet" type="text/css" href="../css/default2010.css?ver=20190113" />\n' +
        '    <link rel="stylesheet" type="text/css" href="../css/style2010.css?ver=20221025" />\n' +
        '</head>\n' +
        '<body>\n' +
        '<script src="http://www.ncc-cma.net/api_cmdp"></script>\n' +
        '<div id="weizhi_login">\n' +
        '    <div id="weizhi">当前位置：<a href="../cn/index.htm">首页</a> → <a href=\'../cn/project.htm\' class=\'lan\'>项目开发</a> → <a href=\'../cn/extreme.htm\' class=\'lan\'>极端天气气候事件监测诊断预测</a> → 干旱<!-- channel_desc --></div>\n' +
        '    <!-- <div style="padding-left:300px; padding-top: 12px; width:300px; text-align:right;"><a href="https://www.ncc-cma.net/climate-corp/" target="_blank" style="color:#FF0000;"><strong>国家气候中心技术合作专栏</strong></a></div> -->\n' +
        '    <div id="login">\n' +
        '        <script src="../cn/cn_member.js.php"></script>\n' +
        '    </div>\n' +
        '</div>\n' +
        '\n' +
        '<div id="main_box">\n' +
        '    <div id="main_left">\n' +
        '        <div id="left_nav">\n' +
        '            <script src="/cn/cn_menu.php"></script>\n' +
        '        </div>\n' +
        '\n' +
        '        <div id="links">\n' +
        '\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div id="main_right">\n' +
        '        <div class="detail_box1">\n' +
        '\n' +
        '            <div id="zhuanti_pic_box" class="zhuanti_pic_ganhan">\n' +
        '                <div id="bookmark_box">\n' +
        '                    <ul>\n' +
        '                        <li class=\'bookmark_front\'><a href=\'/extreme/dust.php?product=dust_moni\'>监测</a></li><li><a href=\'/extreme/dust.php?product=dust_diag\'>诊断</a></li>\n' +
        '                    </ul>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div id="zhuanti_detail">\n' +
        '                <div id="main_topnav_box"><ul><li class="main_topnav_now"><a href="/extreme/dust.php?product=dust_moni&monicat=station"><span>单站干旱事件监测</span></a></li><li><a href="/extreme/dust.php?product=dust_moni&monicat=regional"><span>区域性干旱事件监测</span></a></li></ul><p align="right" style=\'padding-top: 10px;\'>\n' +
        '                    ·<a href="../nccdownload/?ChannelID=46" target=\'_blank\'>MCI指数</a>\n' +
        '                    ·<a href=\'../nccdownload/?ChannelID=47\' target=\'_blank\'>SPI指数</a></li>\n' +
        '                    ·<a href=\'../download/Drought/GBT20481-2017.pdf\' target=\'_blank\'>气象干旱等级(pdf)</a>\n' +
        '                </p><div class="clear"></div></div>\n' +
        '                <a name=\'_search_\'></a>\n' +
        '                <form method=\'post\' action=\'http://localhost:3000/weather\'>\n' +
        '                    <p align=\'center\'>\n' +
        '\n' +
        '                        日期查询：<select  name=Year >\n' +
        '                        <option value=\'\'>年份</option><option value="2023" selected>2023</option>\n' +
        '                        <option value="2022">2022</option>\n' +
        '                        <option value="2021">2021</option>\n' +
        '                        <option value="2020">2020</option>\n' +
        '                        <option value="2019">2019</option>\n' +
        '                        <option value="2018">2018</option>\n' +
        '                        <option value="2017">2017</option>\n' +
        '                        <option value="2016">2016</option>\n' +
        '                        <option value="2015">2015</option>\n' +
        '                        <option value="2014">2014</option>\n' +
        '                        <option value="2013">2013</option>\n' +
        '                        <option value="2012">2012</option>\n' +
        '                        <option value="2011">2011</option>\n' +
        '                        <option value="2010">2010</option>\n' +
        '                        <option value="2009">2009</option>\n' +
        '                        <option value="2008">2008</option>\n' +
        '                        <option value="2007">2007</option>\n' +
        '                        <option value="2006">2006</option>\n' +
        '                        <option value="2005">2005</option>\n' +
        '                        <option value="2004">2004</option>\n' +
        '                        <option value="2003">2003</option>\n' +
        '                        <option value="2002">2002</option>\n' +
        '                        <option value="2001">2001</option>\n' +
        '                        <option value="2000">2000</option>\n' +
        '                        <option value="1999">1999</option>\n' +
        '                        <option value="1998">1998</option>\n' +
        '                        <option value="1997">1997</option>\n' +
        '                        <option value="1996">1996</option>\n' +
        '                        <option value="1995">1995</option>\n' +
        '                        <option value="1994">1994</option>\n' +
        '                        <option value="1993">1993</option>\n' +
        '                        <option value="1992">1992</option>\n' +
        '                        <option value="1991">1991</option>\n' +
        '                        <option value="1990">1990</option>\n' +
        '                        <option value="1989">1989</option>\n' +
        '                        <option value="1988">1988</option>\n' +
        '                        <option value="1987">1987</option>\n' +
        '                        <option value="1986">1986</option>\n' +
        '                        <option value="1985">1985</option>\n' +
        '                        <option value="1984">1984</option>\n' +
        '                        <option value="1983">1983</option>\n' +
        '                        <option value="1982">1982</option>\n' +
        '                        <option value="1981">1981</option>\n' +
        '                        <option value="1980">1980</option>\n' +
        '                        <option value="1979">1979</option>\n' +
        '                        <option value="1978">1978</option>\n' +
        '                        <option value="1977">1977</option>\n' +
        '                        <option value="1976">1976</option>\n' +
        '                        <option value="1975">1975</option>\n' +
        '                        <option value="1974">1974</option>\n' +
        '                        <option value="1973">1973</option>\n' +
        '                        <option value="1972">1972</option>\n' +
        '                        <option value="1971">1971</option>\n' +
        '                        <option value="1970">1970</option>\n' +
        '                        <option value="1969">1969</option>\n' +
        '                        <option value="1968">1968</option>\n' +
        '                        <option value="1967">1967</option>\n' +
        '                        <option value="1966">1966</option>\n' +
        '                        <option value="1965">1965</option>\n' +
        '                        <option value="1964">1964</option>\n' +
        '                        <option value="1963">1963</option>\n' +
        '                        <option value="1962">1962</option>\n' +
        '                    </select>\n' +
        '                        &nbsp; <select  name=Month >\n' +
        '                        <option value=\'\'>月</option><option value="6" selected>6</option>\n' +
        '                        <option value="7">7</option>\n' +
        '                        <option value="8">8</option>\n' +
        '                    </select>\n' +
        '                        &nbsp; <select  name=Day >\n' +
        '                        <option value=\'\'>日</option><option value="1">1</option>\n' +
        '                        <option value="2">2</option>\n' +
        '                        <option value="3">3</option>\n' +
        '                        <option value="4">4</option>\n' +
        '                        <option value="5">5</option>\n' +
        '                        <option value="6">6</option>\n' +
        '                        <option value="7">7</option>\n' +
        '                        <option value="8">8</option>\n' +
        '                        <option value="9">9</option>\n' +
        '                        <option value="10">10</option>\n' +
        '                        <option value="11">11</option>\n' +
        '                        <option value="12" selected>12</option>\n' +
        '                        <option value="13">13</option>\n' +
        '                        <option value="14">14</option>\n' +
        '                        <option value="15">15</option>\n' +
        '                        <option value="16">16</option>\n' +
        '                        <option value="17">17</option>\n' +
        '                        <option value="18">18</option>\n' +
        '                        <option value="19">19</option>\n' +
        '                        <option value="20">20</option>\n' +
        '                        <option value="21">21</option>\n' +
        '                        <option value="22">22</option>\n' +
        '                        <option value="23">23</option>\n' +
        '                        <option value="24">24</option>\n' +
        '                        <option value="25">25</option>\n' +
        '                        <option value="26">26</option>\n' +
        '                        <option value="27">27</option>\n' +
        '                        <option value="28">28</option>\n' +
        '                        <option value="29">29</option>\n' +
        '                        <option value="30">30</option>\n' +
        '                        <option value="31">31</option>\n' +
        '                    </select>\n' +
        '                        &nbsp;\n' +
        '                        <input type=\'submit\' name=\'search\' value=\'刷新图形\'>\n' +
        '                        &nbsp;\n' +
        '                    </p>\n' +
        '                </form>\n' +
        '                <center>\n' +
        '                    <script>\n' +
        '                        function ont( ii ){\n' +
        '                            for(var i=1;i <= 2;i++){\n' +
        '                                document.getElementById(\'t\'+i).style.display=\'none\';\n' +
        '                            }\n' +
        '                            document.getElementById(\'t\'+ii).style.display=\'block\';\n' +
        '                        }\n' +
        '                    </script><br>\n' +
        '                    <a style=\'cursor: pointer;\' onClick=\'ont(1)\' title=\'中国旱涝监测\'><u>[中国](高分辨率)</u></a> &nbsp; <a style=\'cursor: pointer;\' onClick=\'ont(2)\' title=\'降水距平百分率\'><u>[降水]</u></a> &nbsp; <br><br>\n' +
        '                    <div id=\'t1\' style="display:none;">2023-03-12中国旱涝监测<br><a href=\'../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230312_00000000.png\' target=\'_blank\'><img src="../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230312_00000000.png" width=\'750\' border=\'0\' alt=\'点击看原图\'></a><div align=\'right\'>点击看大图</div></div><div id=\'t2\' style="display:none;">2023-03-12降水距平百分率<br><a href=\'../upload/upload2/hljc/djp230312.gif\' target=\'_blank\'><img src="../upload/upload2/hljc/djp230312.gif" width=\'750\' border=\'0\' alt=\'点击看原图\'></a><div align=\'right\'>点击看大图</div></div>\n' +
        '                    <script> ont(1);</script>\n' +
        '                </center>\n' +
        '                <table width=\'90%\' align=center cellpadding=5 cellspacing=0 border=0>\n' +
        '                    <tr>\n' +
        '                        <td>\n' +
        '                            <b>说明：</b><br>\n' +
        '                            <img src=\'../influ/images/dust/MCI.gif\' border=\'0\'> [中国](高分辨率)：中国旱涝监测 &nbsp; <img src=\'../influ/images/dust/Casdd20.gif\' border=\'0\'> [亚欧]：亚欧旱涝指数 &nbsp; <img src=\'../influ/images/dust/Cwldd20.gif\' border=\'0\'> [全球]：全球旱涝指数 &nbsp; <img src=\'../influ/images/dust/zki_txt.gif\' border=\'0\'> [旱涝指数]：指数文件 &nbsp; <img src=\'../influ/images/dust/zzi.gif\' border=\'0\'> [SPI]：SPI指数 &nbsp; <img src=\'../influ/images/dust/djp.gif\' border=\'0\'> [降水]：降水距平百分率 &nbsp; <img src=\'../influ/images/dust/h20.gif\' border=\'0\'> [土壤]：土壤相对湿度 &nbsp; <img src=\'../influ/images/dust/hljc_m.gif\' border=\'0\'> [公报]：中国旱涝气候公报<br>\n' +
        '                        </td>\n' +
        '                    </tr>\n' +
        '                </table>\n' +
        '                <br><br><a name=\'_calendar_\'></a>\n' +
        '                <script>\n' +
        '                    function change(obj)\n' +
        '                    {\n' +
        '                        if(obj.id==\'year\')\n' +
        '                        {\n' +
        '                            yearValue  = obj.value;\n' +
        '                            monthValue = document.getElementById(\'month\').value;\n' +
        '                        }\n' +
        '                        else\n' +
        '                        {\n' +
        '                            yearValue  = document.getElementById(\'year\').value;\n' +
        '                            monthValue = obj.value;\n' +
        '                        }\n' +
        '                        window.location.replace(\'?dateStr=\'+yearValue+\'-\'+monthValue+\'#calendar\');\n' +
        '                    }\n' +
        '                </script>\n' +
        '                <a name=calendar></a>\n' +
        '                <table width="100%" align="center">\n' +
        '                    <tr>\n' +
        '                        <td width=25%><a href="?dateStr=2023-2#calendar"><B>&lt;&lt;上个月</B></a></td>\n' +
        '                        <td align=center><select id=year size="1" name="Y" onchange="change(this)" class="date_select"><option value="2010" >2010</option><option value="2011" >2011</option><option value="2012" >2012</option><option value="2013" >2013</option><option value="2014" >2014</option><option value="2015" >2015</option><option value="2016" >2016</option><option value="2017" >2017</option><option value="2018" >2018</option><option value="2019" >2019</option><option value="2020" >2020</option><option value="2021" >2021</option><option value="2022" >2022</option><option value="2023"selected >2023</option></select>年<select id=month size="1" name="m" onchange="change(this)" class="date_select"><option value="1">1</option><option value="2">2</option><option value="3"selected>3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select>月 &nbsp; &nbsp; &nbsp;<a href="#_search_">[逐日方式查询]</a></td>\n' +
        '                        <td width=25% align=right><a href="?dateStr=2023-4#calendar"><B>下个月&gt;&gt;</B></a></td>\n' +
        '                    </tr>\n' +
        '                </table>\n' +
        '                <table width=\'100%\' align=\'center\' bgcolor=\'#CCCC9A\' border=\'0\' cellpadding=\'0\' cellspacing=\'1\'>\n' +
        '                    <tr bgcolor=\'#E7E7BE\'>\n' +
        '                        <th width=\'14.3%\'>Mon</th>\n' +
        '                        <th width=\'14.3%\'>Tue</th>\n' +
        '                        <th width=\'14.3%\'>Wed</th>\n' +
        '                        <th width=\'14.3%\'>Thu</th>\n' +
        '                        <th width=\'14.3%\'>Fri</th>\n' +
        '                        <th width=\'14.3%\'>Sat</th>\n' +
        '                        <th width=\'14.3%\'>Sun</th>\n' +
        '                    </tr><tr bgcolor="#FFFFFF" height="40"><td>&nbsp;</td><td>&nbsp;</td><td valign="top" align="center">01<BR><a href=\'../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230301_00000000.png\' target=\'_blank\' title=\'2023-03-01-中国旱涝监测\'><img src=\'../influ/images/dust/MCI.gif\' border=\'0\'></a> <a href=\'../download/Monitoring/Drought/djp/djp230301.gif\' target=\'_blank\' title=\'2023-03-01-降水距平百分率\'><img src=\'../influ/images/dust/djp.gif\' border=\'0\'></a> </td><td valign="top" align="center">02<BR><a href=\'../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230302_00000000.png\' target=\'_blank\' title=\'2023-03-02-中国旱涝监测\'><img src=\'../influ/images/dust/MCI.gif\' border=\'0\'></a> <a href=\'../download/Monitoring/Drought/djp/djp230302.gif\' target=\'_blank\' title=\'2023-03-02-降水距平百分率\'><img src=\'../influ/images/dust/djp.gif\' border=\'0\'></a> </td><td valign="top" align="center">03<BR><a href=\'../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230303_00000000.png\' target=\'_blank\' title=\'2023-03-03-中国旱涝监测\'><img src=\'../influ/images/dust/MCI.gif\' border=\'0\'></a> <a href=\'../download/Monitoring/Drought/djp/djp230303.gif\' target=\'_blank\' title=\'2023-03-03-降水距平百分率\'><img src=\'../influ/images/dust/djp.gif\' border=\'0\'></a> </td><td valign="top" align="center">04<BR><a href=\'../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230304_00000000.png\' target=\'_blank\' title=\'2023-03-04-中国旱涝监测\'><img src=\'../influ/images/dust/MCI.gif\' border=\'0\'></a> <a href=\'../download/Monitoring/Drought/djp/djp230304.gif\' target=\'_blank\' title=\'2023-03-04-降水距平百分率\'><img src=\'../influ/images/dust/djp.gif\' border=\'0\'></a> </td><td valign="top" align="center">05<BR><a href=\'../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230305_00000000.png\' target=\'_blank\' title=\'2023-03-05-中国旱涝监测\'><img src=\'../influ/images/dust/MCI.gif\' border=\'0\'></a> <a href=\'../upload/upload2/hljc/djp230305.gif\' target=\'_blank\' title=\'2023-03-05-降水距平百分率\'><img src=\'../influ/images/dust/djp.gif\' border=\'0\'></a> </td></tr><tr bgcolor="#FFFFFF" height="40"><td valign="top" align="center">06<BR><a href=\'../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230306_00000000.png\' target=\'_blank\' title=\'2023-03-06-中国旱涝监测\'><img src=\'../influ/images/dust/MCI.gif\' border=\'0\'></a> <a href=\'../upload/upload2/hljc/djp230306.gif\' target=\'_blank\' title=\'2023-03-06-降水距平百分率\'><img src=\'../influ/images/dust/djp.gif\' border=\'0\'></a> </td><td valign="top" align="center">07<BR><a href=\'../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230307_00000000.png\' target=\'_blank\' title=\'2023-03-07-中国旱涝监测\'><img src=\'../influ/images/dust/MCI.gif\' border=\'0\'></a> <a href=\'../upload/upload2/hljc/djp230307.gif\' target=\'_blank\' title=\'2023-03-07-降水距平百分率\'><img src=\'../influ/images/dust/djp.gif\' border=\'0\'></a> </td><td valign="top" align="center">08<BR><a href=\'../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230308_00000000.png\' target=\'_blank\' title=\'2023-03-08-中国旱涝监测\'><img src=\'../influ/images/dust/MCI.gif\' border=\'0\'></a> <a href=\'../upload/upload2/hljc/djp230308.gif\' target=\'_blank\' title=\'2023-03-08-降水距平百分率\'><img src=\'../influ/images/dust/djp.gif\' border=\'0\'></a> </td><td valign="top" align="center">09<BR><a href=\'../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230309_00000000.png\' target=\'_blank\' title=\'2023-03-09-中国旱涝监测\'><img src=\'../influ/images/dust/MCI.gif\' border=\'0\'></a> <a href=\'../upload/upload2/hljc/djp230309.gif\' target=\'_blank\' title=\'2023-03-09-降水距平百分率\'><img src=\'../influ/images/dust/djp.gif\' border=\'0\'></a> </td><td valign="top" align="center">10<BR><a href=\'../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230310_00000000.png\' target=\'_blank\' title=\'2023-03-10-中国旱涝监测\'><img src=\'../influ/images/dust/MCI.gif\' border=\'0\'></a> <a href=\'../upload/upload2/hljc/djp230310.gif\' target=\'_blank\' title=\'2023-03-10-降水距平百分率\'><img src=\'../influ/images/dust/djp.gif\' border=\'0\'></a> </td><td valign="top" align="center">11<BR><a href=\'../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230311_00000000.png\' target=\'_blank\' title=\'2023-03-11-中国旱涝监测\'><img src=\'../influ/images/dust/MCI.gif\' border=\'0\'></a> <a href=\'../upload/upload2/hljc/djp230311.gif\' target=\'_blank\' title=\'2023-03-11-降水距平百分率\'><img src=\'../influ/images/dust/djp.gif\' border=\'0\'></a> </td><td valign="top" align="center">12<font color=red><B>*</B></font><BR><a href=\'../download/Drought/MCI/CMDP_DSTR_ACHN_L88_DATA_ELEMENT_PDAY_YMD_107578_20230312_00000000.png\' target=\'_blank\' title=\'2023-03-12-中国旱涝监测\'><img src=\'../influ/images/dust/MCI.gif\' border=\'0\'></a> <a href=\'../upload/upload2/hljc/djp230312.gif\' target=\'_blank\' title=\'2023-03-12-降水距平百分率\'><img src=\'../influ/images/dust/djp.gif\' border=\'0\'></a> </td></tr><tr bgcolor="#FFFFFF" height="40"><td valign="top" align="center">13</td><td valign="top" align="center">14</td><td valign="top" align="center">15</td><td valign="top" align="center">16</td><td valign="top" align="center">17</td><td valign="top" align="center">18</td><td valign="top" align="center">19</td></tr><tr bgcolor="#FFFFFF" height="40"><td valign="top" align="center">20</td><td valign="top" align="center">21</td><td valign="top" align="center">22</td><td valign="top" align="center">23</td><td valign="top" align="center">24</td><td valign="top" align="center">25</td><td valign="top" align="center">26</td></tr><tr bgcolor="#FFFFFF" height="40"><td valign="top" align="center">27</td><td valign="top" align="center">28</td><td valign="top" align="center">29</td><td valign="top" align="center">30</td><td valign="top" align="center">31</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>\n' +
        '            </div>\n' +
        '\n' +
        '            <p><br /><br /></p>\n' +
        '        </div>\n' +
        '        <div class="clear"></div>\n' +
        '    </div>\n' +
        '    <div class="clear"></div>\n' +
        '</div>\n' +
        '<div id="copyright">\n' +
        '    <script src="../js/copyright.js.php"></script></div>\n' +
        '</body>\n' +
        '</html>');
});

module.exports = router;