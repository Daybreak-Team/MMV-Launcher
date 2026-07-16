// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    $InitializeCommonEvent(0, 90015000, 0, 46745800, 903575000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46745800, 30, 356000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46745800, 46745800, 1020, 356000, 11290, 903575000, 46745800);
    $InitializeCommonEvent(0, 9005810, 46740800, 46740500, 46741500, 5);
    $InitializeCommonEvent(0, 90015005, 46741500, 46742800, 46745800);
    $InitializeCommonEvent(0, 90015000, 0, 46740810, 904680320, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46740810, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46740810, 46740810, 1020, 920210, 11290, 904680320, 46740810);
    $InitializeCommonEvent(0, 9005810, 46740810, 46740500, 46741500, 5);
    $InitializeCommonEvent(0, 90015005, 46741500, 46742800, 46740810);
    $InitializeCommonEvent(0, 90015000, 0, 46740820, 904980600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46740820, 30, 920110, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46740820, 46740820, 1020, 920110, 11290, 904980600, 46740820);
    $InitializeCommonEvent(0, 9005810, 46740820, 46740500, 46741500, 5);
    $InitializeCommonEvent(0, 90015005, 46741500, 46742800, 46740820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46740800, 356000, 46745800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46740810, 920210, 46740810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46740820, 920110, 46740820, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46745800);
    $InitializeCommonEvent(0, 90015016, 46745800);
    $InitializeCommonEvent(0, 90015015, 46740810);
    $InitializeCommonEvent(0, 90015016, 46740810);
    $InitializeCommonEvent(0, 90015015, 46740820);
    $InitializeCommonEvent(0, 90015016, 46740820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46745800);
        $InitializeCommonEvent(0, 90015468, 46745800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46740810);
        $InitializeCommonEvent(0, 90015468, 46740810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46740820);
        $InitializeCommonEvent(0, 90015468, 46740820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46745800);
    $InitializeCommonEvent(0, 90015199, 46740810);
    $InitializeCommonEvent(0, 90015199, 46740820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46742200, Default, function(chrEntityId) {
    EndIf(
        !(!EventFlag(7603)
            && (InArea(chrEntityId, 1045392989)
                || InArea(chrEntityId, 1045392988)
                || InArea(chrEntityId, 1044362996)
                || InArea(chrEntityId, 1045382998)
                || InArea(chrEntityId, 1045382997)
                || InArea(chrEntityId, 1045362996)
                || InArea(chrEntityId, 1045362995)
                || InArea(chrEntityId, 1045362994))));
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
});
