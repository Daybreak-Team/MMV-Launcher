// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeCommonEvent(0, 90015000, 0, 46880800, 904020540, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46880800, 30, 921210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46880800, 46880800, 1020, 921210, 11290, 904020540, 46880800);
    $InitializeCommonEvent(0, 9005810, 46880800, 46880500, 46881500, 5);
    $InitializeCommonEvent(0, 90015005, 46881500, 46882800, 46880800);
    $InitializeCommonEvent(0, 90015000, 0, 46880810, 903800710, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46880810, 30, 942000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46880810, 46880810, 1020, 942000, 11290, 904020540, 46880810);
    $InitializeCommonEvent(0, 9005810, 46880810, 46880500, 46881500, 5);
    $InitializeCommonEvent(0, 90015005, 46881500, 46882800, 46880810);
    $InitializeCommonEvent(0, 90015000, 0, 46880820, 903800710, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46880820, 30, 942000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46880820, 46880820, 1020, 942000, 11290, 904020540, 46880820);
    $InitializeCommonEvent(0, 9005810, 46880820, 46880500, 46881500, 5);
    $InitializeCommonEvent(0, 90015005, 46881500, 46882800, 46880820);
    $InitializeCommonEvent(0, 90015000, 0, 46880830, 903800700, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46880830, 30, 942000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46880830, 46880830, 1020, 942000, 11290, 904020540, 46880830);
    $InitializeCommonEvent(0, 9005810, 46880830, 46880500, 46881500, 5);
    $InitializeCommonEvent(0, 90015005, 46881500, 46882800, 46880830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46880800, 921210, 46880800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46880800, 942000, 46880810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46880800, 942000, 46880820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46880800, 942000, 46880830, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46880800);
    $InitializeCommonEvent(0, 90015016, 46880800);
    $InitializeCommonEvent(0, 90015015, 46880810);
    $InitializeCommonEvent(0, 90015016, 46880810);
    $InitializeCommonEvent(0, 90015015, 46880820);
    $InitializeCommonEvent(0, 90015016, 46880820);
    $InitializeCommonEvent(0, 90015015, 46880830);
    $InitializeCommonEvent(0, 90015016, 46880830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46880800);
        $InitializeCommonEvent(0, 90015468, 46880800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46880810);
        $InitializeCommonEvent(0, 90015468, 46880810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46880820);
        $InitializeCommonEvent(0, 90015468, 46880820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46880830);
        $InitializeCommonEvent(0, 90015468, 46880830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46880800);
    $InitializeCommonEvent(0, 90015199, 46880810);
    $InitializeCommonEvent(0, 90015199, 46880820);
    $InitializeCommonEvent(0, 90015199, 46880830);
});

$Event(46592200, Default, function(chrEntityId) {
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


