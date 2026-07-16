// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
        
    $InitializeCommonEvent(0, 90015000, 0, 46650800, 907100300, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46650800, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46650800, 46650800, 1020, 920210, 11290, 907100300, 46650800);
    $InitializeCommonEvent(0, 9005810, 46650800, 46650500, 46651500, 5);
    $InitializeCommonEvent(0, 90015005, 46651500, 46652800, 46650800);
    $InitializeCommonEvent(0, 90015000, 0, 46650810, 903800600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46650810, 30, 940000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46650810, 46650810, 1020, 940000, 11290, 903800600, 46650810);
    $InitializeCommonEvent(0, 9005810, 46650810, 46650500, 46651500, 5);
    $InitializeCommonEvent(0, 90015005, 46651500, 46652800, 46650810);
    $InitializeCommonEvent(0, 90015000, 0, 46650820, 904580620, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46650820, 30, 931000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46650820, 46650820, 1020, 931000, 11290, 904580620, 46650820);
    $InitializeCommonEvent(0, 9005810, 46650820, 46650500, 46651500, 5);
    $InitializeCommonEvent(0, 90015005, 46651500, 46652800, 46650820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46650800, 920210, 46650800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46650800, 940000, 46650810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46650800, 931000, 46650820, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46650800);
    $InitializeCommonEvent(0, 90015016, 46650800);
    $InitializeCommonEvent(0, 90015015, 46650810);
    $InitializeCommonEvent(0, 90015016, 46650810);
    $InitializeCommonEvent(0, 90015015, 46650820);
    $InitializeCommonEvent(0, 90015016, 46650820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46650800);
        $InitializeCommonEvent(0, 90015468, 46650800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46650810);
        $InitializeCommonEvent(0, 90015468, 46650810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46650820);
        $InitializeCommonEvent(0, 90015468, 46650820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46650800);
    $InitializeCommonEvent(0, 90015199, 46650810);
    $InitializeCommonEvent(0, 90015199, 46650820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46652200, Default, function(chrEntityId) {
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
