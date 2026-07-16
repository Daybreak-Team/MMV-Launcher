// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(0)) {
        if (EventFlag(49790000)) {
            $InitializeCommonEvent(0, 90055000, 49795200, 1, 49792200, 49790201);
            $InitializeCommonEvent(0, 90055001, 49795200, 1, 49790201, 49790200);
        }
        if (EventFlag(49790001)) {
            $InitializeCommonEvent(0, 90055000, 49795200, 2, 49792200, 49790201);
            $InitializeCommonEvent(0, 90055001, 49795200, 2, 49790201, 49790200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49790200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49792200, 49790200);
    }
    $InitializeCommonEvent(0, 90065910, 49790200, 49790205, 49790800, 920100, 690047, 49795210, 49790800, 903050501, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49790200, 49790800, 920100, 49795210, 49790800, 903050501, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49790800, 2, 0, 0, 1050, 920100, 903050501, 49790800);
    }
    $InitializeCommonEvent(0, 90015012, 49795210, 49790200);
    $InitializeCommonEvent(1, 90015012, 0, 49790200);
    $InitializeCommonEvent(0, 90015020, 49790200, 49790800);
    $InitializeCommonEvent(0, 90015008, 49790205, 49790800, 920100, 49790800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49792200, 49790800);
        $InitializeCommonEvent(0, 90015023, 49790200, 40, 0, 49795210, 49790800, 903050501, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49790200, 49795210, 40, 920100, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49790200, 49790800, 49795210, 1020, 920100, 110320, 903050501, 49790800);
        $InitializeCommonEvent(0, 90015470, 49792200, 49790200, 49790800, 49795210, 0, 0, 49795210);
        $InitializeCommonEvent(0, 90015446, 49795210, 49790200, 49790800, 49792200);
        $InitializeCommonEvent(0, 90015460, 49792200, 49790800);
        $InitializeCommonEvent(0, 90015460, 49792200, 0);
        $InitializeCommonEvent(0, 90015460, 49792200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49792200, 49790800);
        $InitializeCommonEvent(0, 90015475, 49792200, 0);
        $InitializeCommonEvent(0, 90015475, 49792200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49790800);
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49790000, 49790300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49790000, 49790300);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49790000, 49790300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49790000, 49790300);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49790000, 49790300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49790000, 49790300);
    }
    if (3 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49790000, 49790301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49790000, 49790301);
    }
    if (3 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49790000, 49790301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49790000, 49790301);
    }
    if (3 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49790000, 49790301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49790000, 49790301);
    }
    $InitializeEvent(0, 49792800, 49790800, 49790810);
    $InitializeEvent(0, 49792810, 49790810);
    $InitializeEvent(0, 49792820, 49790800, 49790810);
});

$Event(49792800, Default, function(chrEntityId1, chrEntityId2){
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(chrEntityId1, 901300004));
    ForceAnimationPlayback(chrEntityId2, 20000, false, false, false);
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId1, 900, chrEntityId1);
    EnableCharacterHPBarDisplay(chrEntityId2);
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

$Event(49792810, Default, function(chrEntityId2){
    EnableCharacter(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, 30000, true, false, false);
    EnableCharacterImmortality(chrEntityId2);
    EndEvent();
});

$Event(49792820, Default, function(chrEntityId1, chrEntityId2){
    WaitFor(HPRatio(chrEntityId2) <= 0.1 || HPRatio(chrEntityId1) <= 0);
    ClearSpEffect(chrEntityId2, 901300003);
    DisableCharacterHPBarDisplay(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, 20001, false, false, false);
    WaitFor(CharacterHasSpEffect(chrEntityId2, 901300005));
    ForceAnimationPlayback(chrEntityId2, 30000, true, false, false);
    WaitFixedTimeSeconds(5);
    RestartEvent();
});
