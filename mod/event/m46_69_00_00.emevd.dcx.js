// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
        
    $InitializeCommonEvent(0, 90015000, 0, 46690800, 904690000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46690800, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46690800, 46690800, 1020, 920910, 11290, 904690000, 46690800);
    $InitializeCommonEvent(0, 9005810, 46690800, 46690500, 46691500, 5);
    $InitializeCommonEvent(0, 90015005, 46691500, 46692800, 46690800);
    $InitializeCommonEvent(0, 90015000, 0, 46690810, 903460600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46690810, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46690810, 46690810, 1020, 920910, 11290, 903460600, 46690810);
    $InitializeCommonEvent(0, 9005810, 46690810, 46690500, 46691500, 5);
    $InitializeCommonEvent(0, 90015005, 46691500, 46692800, 46690810);
    $InitializeCommonEvent(0, 90015000, 0, 46690820, 903400302, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46690820, 30, 921100, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46690820, 46690820, 1020, 921100, 11290, 903400302, 46690820);
    $InitializeCommonEvent(0, 9005810, 46690820, 46690500, 46691500, 5);
    $InitializeCommonEvent(0, 90015005, 46691500, 46692800, 46690820);
    $InitializeCommonEvent(0, 90015000, 0, 46690830, 905250610, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46690830, 30, 940000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46690830, 46690830, 1020, 940000, 11290, 905250610, 46690830);
    $InitializeCommonEvent(0, 9005810, 46690830, 46690500, 46691500, 5);
    $InitializeCommonEvent(0, 90015005, 46691500, 46692800, 46690830);
    $InitializeCommonEvent(0, 90015000, 0, 46690840, 904976000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46690840, 30, 942000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46690840, 46690840, 1020, 942000, 11290, 904976000, 46690840);
    $InitializeCommonEvent(0, 9005810, 46690840, 46690500, 46691500, 5);
    $InitializeCommonEvent(0, 90015005, 46691500, 46692800, 46690840);
    $InitializeCommonEvent(0, 90015000, 0, 46690850, 904976000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46690850, 30, 942000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46690850, 46690850, 1020, 942000, 11290, 904976000, 46690850);
    $InitializeCommonEvent(0, 9005810, 46690850, 46690500, 46691500, 5);
    $InitializeCommonEvent(0, 90015005, 46691500, 46692800, 46690850);      
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46690800, 920910, 46690800, 16951, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46690800, 920910, 46690810, 16951, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46690800, 921100, 46690820, 16951, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46690800, 940000, 46690830, 16951, 0); 
    $InitializeCommonEvent(0, 90015008, 0, 46690800, 942000, 46690840, 16951, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46690800, 942000, 46690850, 16951, 0);     
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46690800);
    $InitializeCommonEvent(0, 90015016, 46690800);
    $InitializeCommonEvent(0, 90015015, 46690810);
    $InitializeCommonEvent(0, 90015016, 46690810);
    $InitializeCommonEvent(0, 90015015, 46690820);
    $InitializeCommonEvent(0, 90015016, 46690820);
    $InitializeCommonEvent(0, 90015015, 46690830);
    $InitializeCommonEvent(0, 90015016, 46690830);
    $InitializeCommonEvent(0, 90015015, 46690840);
    $InitializeCommonEvent(0, 90015016, 46690840);
    $InitializeCommonEvent(0, 90015015, 46690850);
    $InitializeCommonEvent(0, 90015016, 46690850);    
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46690800);
        $InitializeCommonEvent(0, 90015468, 46690800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46690810);
        $InitializeCommonEvent(0, 90015468, 46690810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46690820);
        $InitializeCommonEvent(0, 90015468, 46690820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46690830);
        $InitializeCommonEvent(0, 90015468, 46690830, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46690840);
        $InitializeCommonEvent(0, 90015468, 46690840, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46690850);
        $InitializeCommonEvent(0, 90015468, 46690850, 8270, 8247);         
    }
    $InitializeCommonEvent(0, 90015199, 46690800);
    $InitializeCommonEvent(0, 90015199, 46690810);
    $InitializeCommonEvent(0, 90015199, 46690820);
    $InitializeCommonEvent(0, 90015199, 46690830);    
    $InitializeCommonEvent(0, 90015199, 46690840);
    $InitializeCommonEvent(0, 90015199, 46690850);     
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46692200, Default, function(chrEntityId) {
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

$Event(46692500, Restart, function(chrEntityId, spEffectId, eventFlagId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    SetEventFlagID(eventFlagId, ON);
});
