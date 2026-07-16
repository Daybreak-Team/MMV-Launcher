// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    $InitializeCommonEvent(0, 90015000, 0, 46640800, 904670000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46640800, 30, 467010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46640800, 46640800, 1020, 467010, 11290, 904670000, 46640800);
    $InitializeCommonEvent(0, 9005810, 46640800, 46640500, 46641500, 5);
    $InitializeCommonEvent(0, 90015005, 46641500, 46642800, 46640800);
    $InitializeCommonEvent(0, 90015000, 0, 46640810, 905250600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46640810, 30, 941010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46640810, 46640810, 1020, 941010, 11290, 905250600, 46640810);
    $InitializeCommonEvent(0, 9005810, 46640810, 46640500, 46641500, 5);
    $InitializeCommonEvent(0, 90015005, 46641500, 46642800, 46640810);
    $InitializeCommonEvent(0, 90015000, 0, 46640820, 905250600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46640820, 30, 941010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46640820, 46640820, 1020, 941010, 11290, 905250600, 46640820);
    $InitializeCommonEvent(0, 9005810, 46640820, 46640500, 46641500, 5);
    $InitializeCommonEvent(0, 90015005, 46641500, 46642800, 46640820);
    $InitializeCommonEvent(0, 90015000, 0, 46640830, 905250600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46640830, 30, 941010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46640830, 46640830, 1020, 941010, 11290, 905250600, 46640830);
    $InitializeCommonEvent(0, 9005810, 46640830, 46640500, 46641500, 5);
    $InitializeCommonEvent(0, 90015005, 46641500, 46642800, 46640830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46640800, 467010, 46640800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46640810, 941010, 46640810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46640820, 941010, 46640820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46640820, 941010, 46640830, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46640800);
    $InitializeCommonEvent(0, 90015016, 46640800);
    $InitializeCommonEvent(0, 90015015, 46640810);
    $InitializeCommonEvent(0, 90015016, 46640810);
    $InitializeCommonEvent(0, 90015015, 46640820);
    $InitializeCommonEvent(0, 90015016, 46640820);
    $InitializeCommonEvent(0, 90015015, 46640830);
    $InitializeCommonEvent(0, 90015016, 46640830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46640800);
        $InitializeCommonEvent(0, 90015468, 46640800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46640810);
        $InitializeCommonEvent(0, 90015468, 46640810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46640820);
        $InitializeCommonEvent(0, 90015468, 46640820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46640830);
        $InitializeCommonEvent(0, 90015468, 46640830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46640800);
    $InitializeCommonEvent(0, 90015199, 46640810);
    $InitializeCommonEvent(0, 90015199, 46640820);
    $InitializeCommonEvent(0, 90015199, 46640830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46642200, Default, function(chrEntityId) {
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
