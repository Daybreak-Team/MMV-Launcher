// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeEvent(0, 49832820, 49830800, 18594, 18592);
    if (IsMapVariation(0)) {
        if (EventFlag(49830000)) {
            $InitializeCommonEvent(0, 90055000, 49835200, 1, 49832200, 49830201);
            $InitializeCommonEvent(0, 90055001, 49835200, 1, 49830201, 49830200);
        }
        if (EventFlag(49830001)) {
            $InitializeCommonEvent(0, 90055000, 49835200, 2, 49832200, 49830201);
            $InitializeCommonEvent(0, 90055001, 49835200, 2, 49830201, 49830200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49830200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49832200, 49830200);
    }
    $InitializeCommonEvent(0, 90065910, 49830200, 49830205, 49830800, 213001, 690047, 49835210, 49830800, 902190000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49830200, 49830800, 213001, 49835210, 49830800, 902190000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49830800, 2, 0, 0, 1050, 213001, 902190000, 49830800);
    }
    $InitializeCommonEvent(0, 90015012, 49835210, 49830200);
    $InitializeCommonEvent(1, 90015012, 0, 49830200);
    $InitializeCommonEvent(0, 90015020, 49830200, 49830800);
    $InitializeCommonEvent(0, 90015008, 49830205, 49830800, 213001, 49830800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49832200, 49830800);
        $InitializeCommonEvent(0, 90015023, 49830200, 40, 0, 49835210, 49830800, 902190000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49830200, 49835210, 40, 213001, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49830200, 49830800, 49835210, 1020, 213001, 110320, 902190000, 49830800);
        $InitializeCommonEvent(0, 90015470, 49832200, 49830200, 49830800, 49835210, 0, 0, 49835210);
        $InitializeCommonEvent(0, 90015446, 49835210, 49830200, 49830800, 49832200);
        $InitializeCommonEvent(0, 90015460, 49832200, 49830800);
        $InitializeCommonEvent(0, 90015460, 49832200, 0);
        $InitializeCommonEvent(0, 90015460, 49832200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49832200, 49830800);
        $InitializeCommonEvent(0, 90015475, 49832200, 0);
        $InitializeCommonEvent(0, 90015475, 49832200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49830800);
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49830000, 49830300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49830000, 49830300);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49830000, 49830300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49830000, 49830300);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49830000, 49830300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49830000, 49830300);
    }
    if (3 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49830000, 49830301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49830000, 49830301);
    }
    if (3 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49830000, 49830301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49830000, 49830301);
    }
    if (3 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49830000, 49830301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49830000, 49830301);
    }
});

$Event(49832820, Restart, function(chrEntityId, spEffectId1, spEffectId2) {
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId1));
    WaitFixedTimeSeconds(1);
    ClearSpEffect(chrEntityId, spEffectId2);
    RestartEvent();
});

$Event(498302800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49832810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49830801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49830800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});


