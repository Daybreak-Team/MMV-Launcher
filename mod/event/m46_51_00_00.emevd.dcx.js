// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {

    $InitializeCommonEvent(0, 90015000, 0, 46510800, 903181300, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46510800, 30, 921410, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46510800, 46510800, 1020, 921410, 11290, 903181300, 46510800);
    $InitializeCommonEvent(0, 9005810, 46510800, 46510500, 46511500, 5);
    $InitializeCommonEvent(0, 90015005, 46511500, 46512800, 46510800);
    $InitializeCommonEvent(0, 90015000, 0, 46515810, 904480311, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46515810, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46515810, 46515810, 1020, 920910, 11290, 904480311, 46515810);
    $InitializeCommonEvent(0, 9005810, 46510810, 46510500, 46511500, 5);
    $InitializeCommonEvent(0, 90015005, 46511500, 46512800, 46515810);
    $InitializeCommonEvent(0, 90015000, 0, 46515820, 904480311, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46515820, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46515820, 46515820, 1020, 920910, 11290, 904480311, 46515820);
    $InitializeCommonEvent(0, 9005810, 46510820, 46510500, 46511500, 5);
    $InitializeCommonEvent(0, 90015005, 46511500, 46512800, 46515820);
    $InitializeCommonEvent(0, 90015000, 0, 46515830, 904480311, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46515830, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46515830, 46515830, 1020, 920910, 11290, 904480311, 46515830);
    $InitializeCommonEvent(0, 9005810, 46510830, 46510500, 46511500, 5);
    $InitializeCommonEvent(0, 90015005, 46511500, 46512800, 46515830);
    $InitializeCommonEvent(0, 90015000, 0, 46515840, 904480311, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46515840, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46515840, 46515840, 1020, 920910, 11290, 904480311, 46515840);
    $InitializeCommonEvent(0, 9005810, 46510840, 46510500, 46511500, 5);
    $InitializeCommonEvent(0, 90015005, 46511500, 46512800, 46515840);
    $InitializeCommonEvent(0, 90015000, 0, 46510850, 904130700, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46510850, 30, 931010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46510850, 46510850, 1020, 931010, 11290, 904130700, 46510850);
    $InitializeCommonEvent(0, 9005810, 46510850, 46510500, 46511500, 5);
    $InitializeCommonEvent(0, 90015005, 46511500, 46512800, 46510850);    
    
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46510800, 921410, 46510800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46510810, 920910, 46515810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46510820, 920910, 46515820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46510830, 920910, 46515830, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46510840, 920910, 46515840, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46510850, 931010, 46510850, 0, 0);    
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46510800);
    $InitializeCommonEvent(0, 90015016, 46510800);
    $InitializeCommonEvent(0, 90015015, 46515810);
    $InitializeCommonEvent(0, 90015016, 46515810);
    $InitializeCommonEvent(0, 90015015, 46515820);
    $InitializeCommonEvent(0, 90015016, 46515820);
    $InitializeCommonEvent(0, 90015015, 46515830);
    $InitializeCommonEvent(0, 90015016, 46515830);
    $InitializeCommonEvent(0, 90015015, 46515840);
    $InitializeCommonEvent(0, 90015016, 46515840);
    $InitializeCommonEvent(0, 90015015, 46510850);
    $InitializeCommonEvent(0, 90015016, 46510850);    
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46510800);
        $InitializeCommonEvent(0, 90015468, 46510800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46515810);
        $InitializeCommonEvent(0, 90015468, 46515810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46515820);
        $InitializeCommonEvent(0, 90015468, 46515820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46515830);
        $InitializeCommonEvent(0, 90015468, 46515830, 8270, 8247);      
        $InitializeCommonEvent(0, 90015071, 46515840);
        $InitializeCommonEvent(0, 90015468, 46515840, 8270, 8247);  
        $InitializeCommonEvent(0, 90015071, 46510850);   
        $InitializeCommonEvent(0, 90015468, 46510850, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46510800);
    $InitializeCommonEvent(0, 90015199, 46515810);
    $InitializeCommonEvent(0, 90015199, 46515820);
    $InitializeCommonEvent(0, 90015199, 46515830);
    $InitializeCommonEvent(0, 90015199, 46515840);
    $InitializeCommonEvent(0, 90015199, 46510850);    
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46512200, Default, function(chrEntityId) {
    EndIf(
        !(EventFlag(7603)
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
