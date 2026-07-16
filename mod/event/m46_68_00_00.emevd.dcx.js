// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
        
    $InitializeCommonEvent(0, 90015000, 0, 46680800, 903560000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46680800, 30, 356000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46680800, 46680800, 1020, 356000, 11290, 903560000, 46680800);
    $InitializeCommonEvent(0, 9005810, 46680800, 46680500, 46681500, 5);
    $InitializeCommonEvent(0, 90015005, 46681500, 46682800, 46680800);
    $InitializeCommonEvent(0, 90015000, 0, 46680810, 903570000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46680810, 30, 356000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46680810, 46680810, 1020, 356000, 11290, 903570000, 46680810);
    $InitializeCommonEvent(0, 9005810, 46680810, 46680500, 46681500, 5);
    $InitializeCommonEvent(0, 90015005, 46681500, 46682800, 46680810);
    $InitializeCommonEvent(0, 90015000, 0, 46680820, 904650601, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46680820, 30, 920300, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46680820, 46680820, 1020, 920300, 11290, 904650601, 46680820);
    $InitializeCommonEvent(0, 9005810, 46680820, 46680500, 46681500, 5);
    $InitializeCommonEvent(0, 90015005, 46681500, 46682800, 46680820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46680800, 356000, 46680800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46680810, 356000, 46680810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46680820, 920300, 46680820, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46680800);
    $InitializeCommonEvent(0, 90015016, 46680800);
    $InitializeCommonEvent(0, 90015015, 46680810);
    $InitializeCommonEvent(0, 90015016, 46680810);
    $InitializeCommonEvent(0, 90015015, 46680820);
    $InitializeCommonEvent(0, 90015016, 46680820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46680800);
        $InitializeCommonEvent(0, 90015468, 46680800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46680810);
        $InitializeCommonEvent(0, 90015468, 46680810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46680820);
        $InitializeCommonEvent(0, 90015468, 46680820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46680800);
    $InitializeCommonEvent(0, 90015199, 46680810);
    $InitializeCommonEvent(0, 90015199, 46680820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46682200, Default, function(chrEntityId) {
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
