// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    $InitializeCommonEvent(0, 90015000, 0, 46570800, 905011000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46570800, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46570800, 46570800, 1020, 920610, 11290, 905011000, 46570800);
    $InitializeCommonEvent(0, 9005810, 46570800, 46570500, 46571500, 5);
    $InitializeCommonEvent(0, 90015005, 46571500, 46572800, 46570800);
    $InitializeCommonEvent(0, 90015000, 0, 46570810, 904601000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46570810, 30, 931000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46570810, 46570810, 1020, 931000, 11290, 904601000, 46570810);
    $InitializeCommonEvent(0, 9005810, 46570810, 46570500, 46571500, 5);
    $InitializeCommonEvent(0, 90015005, 46571500, 46572800, 46570810);
    $InitializeCommonEvent(0, 90015000, 0, 46570820, 903150600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46570820, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46570820, 46570820, 1020, 921010, 11290, 903150600, 46570820);
    $InitializeCommonEvent(0, 9005810, 46570820, 46570500, 46571500, 5);
    $InitializeCommonEvent(0, 90015005, 46571500, 46572800, 46570820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46570800, 920610, 46570800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46570800, 931000, 46570810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46570800, 921010, 46570820, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46570800);
    $InitializeCommonEvent(0, 90015016, 46570800);
    $InitializeCommonEvent(0, 90015015, 46570810);
    $InitializeCommonEvent(0, 90015016, 46570810);
    $InitializeCommonEvent(0, 90015015, 46570820);
    $InitializeCommonEvent(0, 90015016, 46570820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46570800);
        $InitializeCommonEvent(0, 90015468, 46570800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46570810);
        $InitializeCommonEvent(0, 90015468, 46570810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46570820);
        $InitializeCommonEvent(0, 90015468, 46570820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46570800);
    $InitializeCommonEvent(0, 90015199, 46570810);
    $InitializeCommonEvent(0, 90015199, 46570820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46572200, Default, function(chrEntityId) {
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
