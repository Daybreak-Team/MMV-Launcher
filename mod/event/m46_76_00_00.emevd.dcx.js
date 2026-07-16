// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeCommonEvent(0, 90015000, 0, 46760800, 904500600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46760800, 30, 920310, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46760800, 46760800, 1020, 920310, 11290, 904500600, 46760800);
    $InitializeCommonEvent(0, 9005810, 46760800, 46760500, 46761500, 5);
    $InitializeCommonEvent(0, 90015005, 46761500, 46762800, 46760800);
    $InitializeCommonEvent(0, 90015000, 0, 46760810, 905860000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46760810, 30, 920310, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46760810, 46760810, 1020, 920310, 11290, 905860000, 46760810);
    $InitializeCommonEvent(0, 9005810, 46760810, 46760500, 46761500, 5);
    $InitializeCommonEvent(0, 90015005, 46761500, 46762800, 46760810);
    $InitializeCommonEvent(0, 90015000, 0, 46760820, 904910320, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46760820, 30, 920310, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46760820, 46760820, 1020, 920310, 11290, 904910320, 46760820);
    $InitializeCommonEvent(0, 9005810, 46760820, 46760500, 46761500, 5);
    $InitializeCommonEvent(0, 90015005, 46761500, 46762800, 46760820);
    $InitializeCommonEvent(0, 90015000, 0, 46760830, 904502600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46760830, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46760830, 46760830, 1020, 920910, 11290, 904502600, 46760830);
    $InitializeCommonEvent(0, 9005810, 46760830, 46760500, 46761500, 5);
    $InitializeCommonEvent(0, 90015005, 46761500, 46762800, 46760830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46760800, 920310, 46760800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46760810, 920310, 46760810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46760820, 920310, 46760820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46760830, 920910, 46760830, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46760800);
    $InitializeCommonEvent(0, 90015016, 46760800);
    $InitializeCommonEvent(0, 90015015, 46760810);
    $InitializeCommonEvent(0, 90015016, 46760810);
    $InitializeCommonEvent(0, 90015015, 46760820);
    $InitializeCommonEvent(0, 90015016, 46760820);
    $InitializeCommonEvent(0, 90015015, 46760830);
    $InitializeCommonEvent(0, 90015016, 46760830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46760800);
        $InitializeCommonEvent(0, 90015468, 46760800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46760810);
        $InitializeCommonEvent(0, 90015468, 46760810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46760820);
        $InitializeCommonEvent(0, 90015468, 46760820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46760830);
        $InitializeCommonEvent(0, 90015468, 46760830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46760800);
    $InitializeCommonEvent(0, 90015199, 46760810);
    $InitializeCommonEvent(0, 90015199, 46760820);
    $InitializeCommonEvent(0, 90015199, 46760830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46762200, Default, function(chrEntityId) {
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
