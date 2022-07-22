(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"borderSize":0,"backgroundColorRatios":[0],"scrollBarColor":"#000000","gap":10,"mobileMipmappingEnabled":false,"borderRadius":0,"desktopMipmappingEnabled":false,"width":"100%","paddingLeft":0,"paddingTop":0,"scrollBarWidth":10,"id":"rootPlayer","mouseWheelEnabled":true,"paddingRight":0,"overflow":"hidden","horizontalAlign":"left","propagateClick":false,"defaultMenu":["fullscreen","mute","rotation"],"backgroundOpacity":1,"downloadEnabled":false,"children":["this.MainViewer_mobile"],"verticalAlign":"top","class":"Player","contentOpaque":false,"scrollBarOpacity":0.5,"backgroundPreloadEnabled":true,"paddingBottom":0,"height":"100%","mediaActivationMode":"window","backgroundColor":["#FFFFFF"],"definitions": [{"class":"PlayList","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_camera","media":"this.panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"subtitlesGap":0,"progressBarBorderColor":"#000000","borderSize":0,"playbackBarProgressBorderRadius":0,"toolTipTextShadowColor":"#000000","toolTipShadowSpread":0,"playbackBarRight":0,"subtitlesBackgroundColor":"#000000","width":"100%","toolTipFontSize":"1.11vmin","subtitlesTextShadowHorizontalLength":1,"toolTipPaddingRight":3,"displayTooltipInSurfaceSelection":true,"paddingLeft":0,"subtitlesFontSize":"3vmin","id":"MainViewer_mobile","progressBorderRadius":0,"subtitlesPaddingLeft":5,"playbackBarHeadShadowOpacity":0.7,"progressBackgroundColorDirection":"vertical","subtitlesVerticalAlign":"bottom","progressBarBackgroundColorRatios":[0],"paddingRight":0,"subtitlesPaddingRight":5,"playbackBarProgressBackgroundColor":["#3399FF"],"surfaceReticleSelectionOpacity":1,"propagateClick":false,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderSize":0,"subtitlesHorizontalAlign":"center","toolTipFontColor":"#606060","progressLeft":0,"playbackBarHeadShadowBlurRadius":1.5,"displayTooltipInTouchScreens":true,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","toolTipFontWeight":"normal","subtitlesTextShadowOpacity":1,"subtitlesBottom":50,"progressBorderColor":"#000000","toolTipTextShadowOpacity":0,"playbackBarLeft":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesEnabled":true,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"transitionDuration":500,"playbackBarBackgroundOpacity":1,"toolTipHorizontalAlign":"center","playbackBarHeadBorderSize":0,"vrPointerSelectionTime":2000,"playbackBarHeadShadowColor":"#000000","subtitlesPaddingBottom":5,"toolTipDisplayTime":600,"vrPointerSelectionColor":"#FF6600","subtitlesFontColor":"#FFFFFF","subtitlesTextDecoration":"none","playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"surfaceReticleSelectionColor":"#FFFFFF","height":"100%","playbackBarBorderRadius":0,"vrPointerColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowBlurRadius":0,"playbackBarProgressBorderColor":"#000000","minWidth":50,"surfaceReticleColor":"#FFFFFF","minHeight":25,"firstTransitionDuration":0,"progressBackgroundColor":["#FFFFFF"],"borderRadius":0,"playbackBarHeadBorderRadius":0,"playbackBarProgressOpacity":1,"progressBarOpacity":1,"subtitlesFontFamily":"Arial","toolTipShadowOpacity":1,"toolTipBorderColor":"#767676","toolTipShadowVerticalLength":0,"translationTransitionDuration":1000,"playbackBarHeadOpacity":1,"paddingTop":0,"toolTipShadowHorizontalLength":0,"toolTipShadowColor":"#333138","toolTipFontStyle":"normal","toolTipBorderRadius":1,"toolTipTextShadowBlurRadius":1,"progressBottom":0,"playbackBarOpacity":1,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTop":0,"progressBackgroundOpacity":1,"top":0,"paddingBottom":0,"class":"ViewerArea","playbackBarHeadBorderColor":"#000000","subtitlesPaddingTop":5,"progressBackgroundColorRatios":[0],"toolTipPaddingBottom":2,"playbackBarBottom":5,"subtitlesFontWeight":"normal","surfaceReticleOpacity":0.6,"playbackBarBorderSize":0,"progressRight":0,"progressHeight":10,"progressOpacity":1,"toolTipOpacity":1,"doubleClickAction":"toggle_fullscreen","subtitlesShadow":false,"toolTipShadowBlurRadius":1,"transitionMode":"blending","playbackBarProgressBackgroundColorDirection":"vertical","progressBorderSize":0,"playbackBarHeadShadowVerticalLength":0,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowColor":"#000000","toolTipFontFamily":"Arial","progressBarBackgroundColorDirection":"vertical","progressBarBorderRadius":0,"playbackBarHeight":10,"progressBarBorderSize":0,"left":0,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadWidth":6,"subtitlesOpacity":1,"shadow":false,"playbackBarProgressBorderSize":0,"toolTipBorderSize":1,"toolTipPaddingLeft":3,"playbackBarBackgroundColorDirection":"vertical","data":{"name":"Main Viewer"},"toolTipPaddingTop":2},{"gyroscopeVerticalDraggingEnabled":true,"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","zoomEnabled":true,"arrowKeysAction":"translate","surfaceSelectionEnabled":false,"viewerArea":"this.MainViewer_mobile","aaEnabled":true,"class":"PanoramaPlayer","displayPlaybackBar":true,"id":"MainViewer_mobilePanoramaPlayer"},{"initialPosition":{"yaw":16.87,"class":"PanoramaCameraPosition","pitch":-11.68},"automaticZoomSpeed":10,"id":"panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_camera","class":"PanoramaCamera","hoverFactor":0,"initialSequence":"this.sequence_3E17C743_23E4_3203_4193_965D6E263194"},{"hfov":360,"label":trans('panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF.label'),"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":21504,"colCount":42,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/0/{row}_{column}.jpg","height":3584,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":7},{"width":12288,"colCount":24,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/1/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4},{"width":6144,"colCount":12,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/2/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/3/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1},{"width":12288,"colCount":6,"url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","rowCount":1}],"class":"ImageResource"}}],"overlays":["this.overlay_3FB9D1A7_23E4_6E02_4199_0DFD915EF8D0","this.overlay_24503D13_2BE9_567D_41BE_AEE6E9382370","this.overlay_3AED5172_2BEE_F13A_41B4_F914863A27AC","this.overlay_3A7ED59F_2BEF_D14D_41C0_F59E55CAED8A","this.overlay_2537263B_2BEE_B3C0_41B8_88FC7A50185C","this.overlay_2432D8C8_2BEB_51B4_41C5_06FA70EA003A","this.overlay_3B905078_2BEA_D1DD_41B7_B30F996DA0A1","this.overlay_25ED5127_2BE9_B3C6_41C0_98789A316D7E","this.overlay_24A7F98B_2BE7_7201_41B5_3158BB54675E","this.overlay_24893DF3_2BE7_5201_41A5_DA1D54F52023","this.overlay_2494D68B_2BE7_BE02_41C0_6BD984847121","this.overlay_2415BF54_2BE7_AE07_41A2_3EC654FD7845","this.overlay_3BE9C7AA_2BE7_5E03_41BB_81B3EE7A6986","this.overlay_3BFE6F0B_2BE7_6E02_41B4_04B8C0736AEF","this.overlay_3BF19684_2BE7_7E06_41B7_FDD66BC9D68F","this.overlay_3BC56EFA_2BE7_6E03_4142_19042935D218","this.overlay_3914C828_2C69_7237_41B3_FB42EBF08441","this.overlay_7E9DF827_6F27_6A05_41C0_90B46C6A01F3","this.overlay_7E21C7E4_6F27_6639_41D0_B65628423816"],"partial":false,"thumbnailUrl":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_t.jpg","hfovMax":130,"class":"Panorama","data":{"label":"H\u1ea1 Long"},"pitch":0,"id":"panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF"},{"movements":[{"yawDelta":18.5,"yawSpeed":3.72,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":3.72,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawDelta":18.5,"yawSpeed":3.72,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_3E17C743_23E4_3203_4193_965D6E263194"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_3F00E1C2_23E4_6E02_4174_E34D04B46EC5"],"useHandCursor":true,"enabled":false,"maps":[],"data":{"label":"Polygon1"},"items":[{"image":{"levels":[{"height":483,"width":444,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_nky7y9nm.png"}],"class":"ImageResource"},"distance":50,"yaw":7.48,"hfov":15.89,"data":{"label":"Polygon1"},"class":"HotspotPanoramaOverlayImage","pitch":-20.77,"vfov":17.29}],"enabledInCardboard":true,"id":"overlay_3FB9D1A7_23E4_6E02_4199_0DFD915EF8D0"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_243D8D4D_2BE9_56E5_41BC_5C423ECE4CB7"],"useHandCursor":true,"enabled":false,"maps":[],"data":{"label":"Polygon2"},"items":[{"image":{"levels":[{"height":253,"width":765,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_d3b1idh5.png"}],"class":"ImageResource"},"distance":50,"yaw":-15.32,"hfov":27.06,"data":{"label":"Polygon2"},"class":"HotspotPanoramaOverlayImage","pitch":-26.01,"vfov":9.11}],"enabledInCardboard":true,"id":"overlay_24503D13_2BE9_567D_41BE_AEE6E9382370"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_3AED1173_2BEE_F13A_41C3_F57C6F85618E"],"useHandCursor":true,"enabled":false,"maps":[],"data":{"label":"Polygon3"},"items":[{"image":{"levels":[{"height":127,"width":221,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_e99rvhwc.png"}],"class":"ImageResource"},"distance":50,"yaw":18.75,"hfov":7.97,"data":{"label":"Polygon3"},"class":"HotspotPanoramaOverlayImage","pitch":-24.19,"vfov":4.57}],"enabledInCardboard":true,"id":"overlay_3AED5172_2BEE_F13A_41B4_F914863A27AC"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_3A7EB5A0_2BEF_D173_4172_71DF0AAA65C4"],"useHandCursor":true,"enabled":false,"maps":[],"data":{"label":"Polygon33"},"items":[{"image":{"levels":[{"height":223,"width":552,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_c8tmq5v1.png"}],"class":"ImageResource"},"distance":50,"yaw":35.89,"hfov":19.7,"data":{"label":"Polygon33"},"class":"HotspotPanoramaOverlayImage","pitch":-26.11,"vfov":8.02}],"enabledInCardboard":true,"id":"overlay_3A7ED59F_2BEF_D14D_41C0_F59E55CAED8A"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_2535363D_2BEE_B3C0_419D_72551C8CFA28"],"useHandCursor":true,"enabled":false,"maps":[],"data":{"label":"Polygon5"},"items":[{"image":{"levels":[{"height":46,"width":260,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_g8zoqstl.png"}],"class":"ImageResource"},"distance":50,"yaw":-21.49,"hfov":9.34,"data":{"label":"Polygon5"},"class":"HotspotPanoramaOverlayImage","pitch":-8.59,"vfov":1.66}],"enabledInCardboard":true,"id":"overlay_2537263B_2BEE_B3C0_41B8_88FC7A50185C"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_240D08CA_2BEB_51B4_41C2_208A27339A1C"],"useHandCursor":true,"enabled":false,"maps":[],"data":{"label":"Polygon55"},"items":[{"image":{"levels":[{"height":48,"width":166,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_t2exectz.png"}],"class":"ImageResource"},"distance":50,"yaw":-14.53,"hfov":5.99,"data":{"label":"Polygon55"},"class":"HotspotPanoramaOverlayImage","pitch":-7.13,"vfov":1.73}],"enabledInCardboard":true,"id":"overlay_2432D8C8_2BEB_51B4_41C5_06FA70EA003A"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_3B90207B_2BEA_D1D3_41C4_91B8900F3529"],"useHandCursor":true,"enabled":false,"maps":[],"data":{"label":"Polygon6"},"items":[{"image":{"levels":[{"height":120,"width":533,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_cwprmpok.png"}],"class":"ImageResource"},"distance":50,"yaw":-10.6,"hfov":19.02,"data":{"label":"Polygon6"},"class":"HotspotPanoramaOverlayImage","pitch":-10.14,"vfov":4.33}],"enabledInCardboard":true,"id":"overlay_3B905078_2BEA_D1DD_41B7_B30F996DA0A1"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_25FC312B_2BE9_B3CE_41C4_FC0EA0F5BDC7"],"useHandCursor":true,"enabled":false,"maps":[],"data":{"label":"Polygon7"},"items":[{"image":{"levels":[{"height":69,"width":282,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_hf4i010z.png"}],"class":"ImageResource"},"distance":50,"yaw":-17.48,"hfov":10.13,"data":{"label":"Polygon7"},"class":"HotspotPanoramaOverlayImage","pitch":-7.95,"vfov":2.49}],"enabledInCardboard":true,"id":"overlay_25ED5127_2BE9_B3C6_41C0_98789A316D7E"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_24A6298D_2BE7_7201_4150_705A819411DA"],"useHandCursor":true,"rollOverDisplay":true,"maps":[],"data":{"label":"Polygon1_1"},"items":[{"image":{"levels":[{"height":483,"width":444,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_odpe8ppc.png"}],"class":"ImageResource"},"distance":50,"yaw":7.48,"hfov":15.89,"data":{"label":"Polygon1_1"},"class":"HotspotPanoramaOverlayImage","pitch":-20.77,"vfov":17.29}],"enabledInCardboard":true,"id":"overlay_24A7F98B_2BE7_7201_41B5_3158BB54675E"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_24890DF3_2BE7_5201_41B4_8FA948B118DD"],"useHandCursor":true,"rollOverDisplay":true,"maps":[],"data":{"label":"Polygon2_1"},"items":[{"image":{"levels":[{"height":253,"width":765,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_on2jwyuc.png"}],"class":"ImageResource"},"distance":50,"yaw":-15.32,"hfov":27.06,"data":{"label":"Polygon2_1"},"class":"HotspotPanoramaOverlayImage","pitch":-26.01,"vfov":9.11}],"enabledInCardboard":true,"id":"overlay_24893DF3_2BE7_5201_41A5_DA1D54F52023"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_2493368B_2BE7_BE02_41AE_EDA2FB8C84D9"],"useHandCursor":true,"rollOverDisplay":true,"maps":[],"data":{"label":"Polygon3_1"},"items":[{"image":{"levels":[{"height":127,"width":221,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_xdx4u06c.png"}],"class":"ImageResource"},"distance":50,"yaw":18.75,"hfov":7.97,"data":{"label":"Polygon3_1"},"class":"HotspotPanoramaOverlayImage","pitch":-24.19,"vfov":4.57}],"enabledInCardboard":true,"id":"overlay_2494D68B_2BE7_BE02_41C0_6BD984847121"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_2415AF54_2BE7_AE07_419F_36F8BC971FAA"],"useHandCursor":true,"rollOverDisplay":true,"maps":[],"data":{"label":"Polygon33_1"},"items":[{"image":{"levels":[{"height":223,"width":552,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_3x8xm1gv.png"}],"class":"ImageResource"},"distance":50,"yaw":35.89,"hfov":19.7,"data":{"label":"Polygon33_1"},"class":"HotspotPanoramaOverlayImage","pitch":-26.11,"vfov":8.02}],"enabledInCardboard":true,"id":"overlay_2415BF54_2BE7_AE07_41A2_3EC654FD7845"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_3BE9D7AA_2BE7_5E03_41C2_D577024FF22A"],"useHandCursor":true,"rollOverDisplay":true,"maps":[],"data":{"label":"Polygon5_1"},"items":[{"image":{"levels":[{"height":46,"width":260,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_hcwpkazk.png"}],"class":"ImageResource"},"distance":50,"yaw":-21.49,"hfov":9.34,"data":{"label":"Polygon5_1"},"class":"HotspotPanoramaOverlayImage","pitch":-8.59,"vfov":1.66}],"enabledInCardboard":true,"id":"overlay_3BE9C7AA_2BE7_5E03_41BB_81B3EE7A6986"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_3BFD8F0C_2BE7_6E06_41C2_D9A9E699E6C0"],"useHandCursor":true,"rollOverDisplay":true,"maps":[],"data":{"label":"Polygon55_1"},"items":[{"image":{"levels":[{"height":48,"width":166,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_uee7lkyk.png"}],"class":"ImageResource"},"distance":50,"yaw":-14.53,"hfov":5.99,"data":{"label":"Polygon55_1"},"class":"HotspotPanoramaOverlayImage","pitch":-7.13,"vfov":1.73}],"enabledInCardboard":true,"id":"overlay_3BFE6F0B_2BE7_6E02_41B4_04B8C0736AEF"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_3BF18684_2BE7_7E06_41AA_2A91B8CEA053"],"useHandCursor":true,"rollOverDisplay":true,"maps":[],"data":{"label":"Polygon6_1"},"items":[{"image":{"levels":[{"height":120,"width":533,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_izflzozu.png"}],"class":"ImageResource"},"distance":50,"yaw":-10.6,"hfov":19.02,"data":{"label":"Polygon6_1"},"class":"HotspotPanoramaOverlayImage","pitch":-10.14,"vfov":4.33}],"enabledInCardboard":true,"id":"overlay_3BF19684_2BE7_7E06_41B7_FDD66BC9D68F"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_3BC49EFA_2BE7_6E03_4198_2074E1DAFFA9"],"useHandCursor":true,"rollOverDisplay":true,"maps":[],"data":{"label":"Polygon7_1"},"items":[{"image":{"levels":[{"height":69,"width":282,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_ajgg4waj.png"}],"class":"ImageResource"},"distance":50,"yaw":-17.48,"hfov":10.13,"data":{"label":"Polygon7_1"},"class":"HotspotPanoramaOverlayImage","pitch":-7.95,"vfov":2.49}],"enabledInCardboard":true,"id":"overlay_3BC56EFA_2BE7_6E03_4142_19042935D218"},{"data":{"label":"sunOnsenVillage"},"maps":[],"items":[{"image":"this.res_3A87FCA3_2C6F_D239_41BC_147D697A43E6","distance":50,"rotationX":16.3,"pitch":0.25,"scaleMode":"fit_inside","yaw":160.37,"data":{"label":"sunOnsenVillage"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","hfov":5.91,"vfov":7.88}],"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_3930F974_2C69_721F_4196_475B6F67E5F0"],"enabledInCardboard":true,"id":"overlay_3914C828_2C69_7237_41B3_FB42EBF08441"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_7E9C282D_6F27_6A05_41AD_45D4E9525821"],"useHandCursor":true,"enabled":false,"maps":[],"data":{"label":"Polygon 4"},"items":[{"image":{"levels":[{"height":62,"width":120,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_ctgnljvn.png"}],"class":"ImageResource"},"distance":50,"yaw":160.14,"hfov":4.35,"data":{"label":"Polygon 4"},"class":"HotspotPanoramaOverlayImage","pitch":-3.18,"vfov":2.25}],"enabledInCardboard":true,"id":"overlay_7E9DF827_6F27_6A05_41C0_90B46C6A01F3"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_7E2167E6_6F27_6639_41D9_05DB6F540A61"],"useHandCursor":true,"rollOverDisplay":true,"maps":[],"data":{"label":"Polygon 4_1"},"items":[{"image":{"levels":[{"height":62,"width":120,"class":"ImageResourceLevel","url":"media/panorama_3D9CE6D4_23E4_1205_41C0_B6718D9092EF_HS_yuhxs4pb.png"}],"class":"ImageResource"},"distance":50,"yaw":160.14,"hfov":4.35,"data":{"label":"Polygon 4_1"},"class":"HotspotPanoramaOverlayImage","pitch":-3.18,"vfov":2.25}],"enabledInCardboard":true,"id":"overlay_7E21C7E4_6F27_6639_41D0_B65628423816"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3F00E1C2_23E4_6E02_4174_E34D04B46EC5"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_243D8D4D_2BE9_56E5_41BC_5C423ECE4CB7"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3AED1173_2BEE_F13A_41C3_F57C6F85618E"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3A7EB5A0_2BEF_D173_4172_71DF0AAA65C4"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2535363D_2BEE_B3C0_419D_72551C8CFA28"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_240D08CA_2BEB_51B4_41C2_208A27339A1C"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3B90207B_2BEA_D1D3_41C4_91B8900F3529"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_25FC312B_2BE9_B3CE_41C4_FC0EA0F5BDC7"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_4635517C_5009_7A29_41C4_995B27037633.source'), '_top')","id":"HotspotPanoramaOverlayArea_24A6298D_2BE7_7201_4150_705A819411DA"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_475F302B_5009_1A2F_41D3_4A067EA18DE8.source'), '_top')","id":"HotspotPanoramaOverlayArea_24890DF3_2BE7_5201_41B4_8FA948B118DD"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_45F9F9E6_500F_0A26_41D3_0C4354BDDAA2.source'), '_top')","id":"HotspotPanoramaOverlayArea_2493368B_2BE7_BE02_41AE_EDA2FB8C84D9"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_46114FD4_500F_067A_41BA_3BE3BA9541D8.source'), '_top')","id":"HotspotPanoramaOverlayArea_2415AF54_2BE7_AE07_419F_36F8BC971FAA"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3BE9D7AA_2BE7_5E03_41C2_D577024FF22A"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3BFD8F0C_2BE7_6E06_41C2_D9A9E699E6C0"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3BF18684_2BE7_7E06_41AA_2A91B8CEA053"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3BC49EFA_2BE7_6E03_4198_2074E1DAFFA9"},{"levels":[{"height":300,"width":232,"class":"ImageResourceLevel","url":"media/res_3A87FCA3_2C6F_D239_41BC_147D697A43E6_0.png"}],"class":"ImageResource","id":"res_3A87FCA3_2C6F_D239_41BC_147D697A43E6"},{"rollOver":"this.setOverlaysVisibility([this.overlay_7E9DF827_6F27_6A05_41C0_90B46C6A01F3], true, 0)","mapColor":"any","id":"HotspotPanoramaOverlayArea_3930F974_2C69_721F_4196_475B6F67E5F0","class":"HotspotPanoramaOverlayArea","rollOut":"this.setOverlaysVisibility([this.overlay_7E9DF827_6F27_6A05_41C0_90B46C6A01F3], false, 0)"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_7E9C282D_6F27_6A05_41AD_45D4E9525821"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_7E2167E6_6F27_6639_41D9_05DB6F540A61"}],"defaultVRPointer":"laser","toolTipHorizontalAlign":"center","layout":"absolute","vrPolyfillScale":0.75,"scripts":{"translate":TDV.Tour.Script.translate,"executeJS":TDV.Tour.Script.executeJS,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"resumePlayers":TDV.Tour.Script.resumePlayers,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMainViewer":TDV.Tour.Script.getMainViewer,"getKey":TDV.Tour.Script.getKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"init":TDV.Tour.Script.init,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizStart":TDV.Tour.Script.quizStart,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"unregisterKey":TDV.Tour.Script.unregisterKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"registerKey":TDV.Tour.Script.registerKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setMapLocation":TDV.Tour.Script.setMapLocation,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"shareSocial":TDV.Tour.Script.shareSocial,"getOverlays":TDV.Tour.Script.getOverlays,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"cloneCamera":TDV.Tour.Script.cloneCamera,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"initQuiz":TDV.Tour.Script.initQuiz,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"downloadFile":TDV.Tour.Script.downloadFile,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPixels":TDV.Tour.Script.getPixels,"setValue":TDV.Tour.Script.setValue,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"isPanorama":TDV.Tour.Script.isPanorama,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getComponentByName":TDV.Tour.Script.getComponentByName,"setLocale":TDV.Tour.Script.setLocale,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showWindow":TDV.Tour.Script.showWindow,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"mixObject":TDV.Tour.Script.mixObject,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizShowScore":TDV.Tour.Script.quizShowScore,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"takeScreenshot":TDV.Tour.Script.takeScreenshot},"scrollBarVisible":"rollOver","scrollBarMargin":2,"start":"this.init()","backgroundColorDirection":"vertical","minWidth":20,"shadow":false,"minHeight":20,"data":{"defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false,"rate":1},"name":"Player736","locales":{"en":"locale/en.txt"}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.15.js.map
})();
//Generated with v2022.1.15, Fri Jul 22 2022