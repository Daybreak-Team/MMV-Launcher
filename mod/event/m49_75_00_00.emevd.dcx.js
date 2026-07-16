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
        if (EventFlag(49750000)) {
            $InitializeCommonEvent(0, 90055000, 49755200, 1, 49752200, 49750201);
            $InitializeCommonEvent(0, 90055001, 49755200, 1, 49750201, 49750200);
        }
        if (EventFlag(49750001)) {
            $InitializeCommonEvent(0, 90055000, 49755200, 2, 49752200, 49750201);
            $InitializeCommonEvent(0, 90055001, 49755200, 2, 49750201, 49750200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49750200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49752200, 49750200);
    }
    //$InitializeCommonEvent(0, 90065910, 49750200, 49750205, 49750800, 772000, 690047, 49755210, 49755210, 140001, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065913, 49750200, 49750205, 49750800, 772000, 690047, 49755210, 49750800, 140001, 49750810, 49750820);
    $InitializeCommonEvent(0, 90065911, 49750200, 49750800, 772000, 49755210, 49755210, 140001, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49750800, 2, 0, 0, 1050, 772000, 140001, 49750800);
    }
    $InitializeCommonEvent(0, 90015012, 49755210, 49750200);
    $InitializeCommonEvent(1, 90015012, 0, 49750200);
    $InitializeCommonEvent(0, 90015020, 49750200, 49750800);
    $InitializeCommonEvent(0, 90015008, 49750205, 49750800, 772000, 49755210, 0, 0.6);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065144, 49750820, 49750830, 49750840, 49750850, 49750860, 49755210, 49750200, 49750800, 49750206);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065145, 49750820, 49750830, 49750840, 49750850, 49750860, 49755210, 49750200, 49750800, 49750206, 49750207);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49752200, 49750800);
        $InitializeCommonEvent(0, 90015023, 49750200, 40, 0, 49755210, 49755210, 140001, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49750200, 49755210, 40, 772000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49750200, 49750800, 49755210, 1020, 772000, 110320, 140001, 49750050);
        $InitializeCommonEvent(0, 90015470, 49752200, 49750200, 49750800, 49755210, 0, 0, 49755210);
        $InitializeCommonEvent(0, 90015446, 49755210, 49750200, 49750800, 49752200);
        $InitializeCommonEvent(0, 90015460, 49752200, 49755210);
        $InitializeCommonEvent(0, 90015460, 49752200, 0);
        $InitializeCommonEvent(0, 90015460, 49752200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49752200, 49750050);
        $InitializeCommonEvent(0, 90015475, 49752200, 0);
        $InitializeCommonEvent(0, 90015475, 49752200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49755210);
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49750000, 49750300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49750000, 49750300);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49750000, 49750300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49750000, 49750300);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49750000, 49750300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49750000, 49750300);
    }
    if (3 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49750000, 49750301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49750000, 49750301);
    }
    if (3 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49750000, 49750301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49750000, 49750301);
    }
    if (3 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49750000, 49750301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49750000, 49750301);
    }
});

$Event(49752800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
});

$Event(49752810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterAI(chrEntityId);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterAI(chrEntityId);
    ForceAnimationPlayback(48600800, 20005, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(48600800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});


