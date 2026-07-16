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
        if (EventFlag(49610000)) {
            $InitializeCommonEvent(0, 90055000, 49615200, 1, 49612200, 49610201);
            $InitializeCommonEvent(0, 90055001, 49615200, 1, 49610201, 49610200);
        }
        if (EventFlag(49610001)) {
            $InitializeCommonEvent(0, 90055000, 49615200, 2, 49612200, 49610201);
            $InitializeCommonEvent(0, 90055001, 49615200, 2, 49610201, 49610200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49610200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49612200, 49610200);
    }
    $InitializeCommonEvent(0, 90065910, 49610200, 49610205, 49610800, 920310, 690047, 49615210, 49610800, 904503700, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49610200, 49610800, 920310, 49615210, 49610800, 904503700, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49610800, 1, 0, 0, 1050, 920310, 904503700, 49610800);
    }
    $InitializeCommonEvent(0, 90015012, 49615210, 49610200);
    $InitializeCommonEvent(1, 90015012, 0, 49610200);
    $InitializeCommonEvent(0, 90015020, 49610200, 49610800);
    $InitializeCommonEvent(0, 90015008, 49610205, 49610800, 920310, 49610800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49612200, 49610800);
        $InitializeCommonEvent(0, 90015023, 49610200, 40, 0, 49615210, 49610800, 904503700, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49610200, 49615210, 40, 920310, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49610200, 0, 49615210, 1020, 920310, 110320, 904503700, 49610800);
        $InitializeCommonEvent(0, 90015470, 49612200, 49610200, 49610800, 49615210, 0, 0, 49615210);
        $InitializeCommonEvent(0, 90015446, 49615210, 49610200, 49610800, 49612200);
        $InitializeCommonEvent(0, 90015460, 49612200, 49610800);
        $InitializeCommonEvent(0, 90015460, 49612200, 0);
        $InitializeCommonEvent(0, 90015460, 49612200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49612200, 49610800);
        $InitializeCommonEvent(0, 90015475, 49612200, 0);
        $InitializeCommonEvent(0, 90015475, 49612200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49610800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49610000, 49610300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49610000, 49610300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49610000, 49610300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49610000, 49610300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49610000, 49610300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49610000, 49610300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49610000, 49610301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49610000, 49610301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49610000, 49610301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49610000, 49610301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49610000, 49610301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49610000, 49610301);
    }
});

$Event(496102800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49612810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    ForceAnimationPlayback(49610800, 20012, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49610801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49610800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
