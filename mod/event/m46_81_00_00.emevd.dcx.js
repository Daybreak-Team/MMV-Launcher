// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeCommonEvent(0, 90015000, 0, 46810800, 902100600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46810800, 30, 921510, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46810800, 46810800, 1020, 921510, 11290, 902100600, 46810800);
    $InitializeCommonEvent(0, 9005810, 46810800, 46810500, 46811500, 5);
    $InitializeCommonEvent(0, 90015005, 46811500, 46812800, 46810800);
    $InitializeCommonEvent(0, 90015000, 0, 46810810, 903400301, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46810810, 30, 921100, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46810810, 46810810, 1020, 921100, 11290, 902100600, 46810810);
    $InitializeCommonEvent(0, 9005810, 46810810, 46810500, 46811500, 5);
    $InitializeCommonEvent(0, 90015005, 46811500, 46812800, 46810810);
    $InitializeCommonEvent(0, 90015000, 0, 46810820, 903400302, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46810820, 30, 921100, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46810820, 46810820, 1020, 921100, 11290, 902100600, 46810820);
    $InitializeCommonEvent(0, 9005810, 46810820, 46810500, 46811500, 5);
    $InitializeCommonEvent(0, 90015005, 46811500, 46812800, 46810820);
    $InitializeCommonEvent(0, 90015000, 0, 46810830, 905070000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46810830, 30, 942000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46810830, 46810830, 1020, 942000, 11290, 902100600, 46810830);
    $InitializeCommonEvent(0, 9005810, 46810830, 46810500, 46811500, 5);
    $InitializeCommonEvent(0, 90015005, 46811500, 46812800, 46810830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46810800, 921510, 46810800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46810800, 921100, 46810810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46810800, 921100, 46810820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46810800, 942000, 46810830, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46810800);
    $InitializeCommonEvent(0, 90015016, 46810800);
    $InitializeCommonEvent(0, 90015015, 46810810);
    $InitializeCommonEvent(0, 90015016, 46810810);
    $InitializeCommonEvent(0, 90015015, 46810820);
    $InitializeCommonEvent(0, 90015016, 46810820);
    $InitializeCommonEvent(0, 90015015, 46810830);
    $InitializeCommonEvent(0, 90015016, 46810830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46810800);
        $InitializeCommonEvent(0, 90015468, 46810800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46810810);
        $InitializeCommonEvent(0, 90015468, 46810810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46810820);
        $InitializeCommonEvent(0, 90015468, 46810820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46810830);
        $InitializeCommonEvent(0, 90015468, 46810830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46810800);
    $InitializeCommonEvent(0, 90015199, 46810810);
    $InitializeCommonEvent(0, 90015199, 46810820);
    $InitializeCommonEvent(0, 90015199, 46810830);
});

$Event(45512200, Default, function(chrEntityId) {
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


