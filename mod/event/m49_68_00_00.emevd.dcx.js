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
        if (EventFlag(49680000)) {
            $InitializeCommonEvent(0, 90055000, 49685200, 1, 49682200, 49680201);
            $InitializeCommonEvent(0, 90055001, 49685200, 1, 49680201, 49680200);
        }
        if (EventFlag(49680001)) {
            $InitializeCommonEvent(0, 90055000, 49685200, 2, 49682200, 49680201);
            $InitializeCommonEvent(0, 90055001, 49685200, 2, 49680201, 49680200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49680200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49682200, 49680200);
    }
    $InitializeCommonEvent(0, 90065910, 49680200, 49680205, 49680800, 467010, 690047, 49685210, 49680800, 904968000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49680200, 49680800, 467010, 49685210, 49680800, 904968000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49680800, 1, 0, 0, 1050, 467010, 904968000, 49680800);
    }
    $InitializeCommonEvent(0, 90015012, 49685210, 49680200);
    $InitializeCommonEvent(1, 90015012, 0, 49680200);
    $InitializeCommonEvent(0, 90015020, 49680200, 49680800);
    $InitializeCommonEvent(0, 90015008, 49680205, 49680800, 467010, 49680800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49682200, 49680800);
        $InitializeCommonEvent(0, 90015023, 49680200, 40, 0, 49685210, 49680800, 904968000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49680200, 49685210, 40, 467010, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49680200, 0, 49685210, 1020, 467010, 110320, 904968000, 49680800);
        $InitializeCommonEvent(0, 90015470, 49682200, 49680200, 49680800, 49685210, 0, 0, 49685210);
        $InitializeCommonEvent(0, 90015446, 49685210, 49680200, 49680800, 49682200);
        $InitializeCommonEvent(0, 90015460, 49682200, 49680800);
        $InitializeCommonEvent(0, 90015460, 49682200, 0);
        $InitializeCommonEvent(0, 90015460, 49682200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49682200, 49680800);
        $InitializeCommonEvent(0, 90015475, 49682200, 0);
        $InitializeCommonEvent(0, 90015475, 49682200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49680800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49680000, 49680300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49680000, 49680300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49680000, 49680300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49680000, 49680300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49680000, 49680300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49680000, 49680300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49680000, 49680301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49680000, 49680301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49680000, 49680301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49680000, 49680301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49680000, 49680301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49680000, 49680301);
    }
});

$Event(496802800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49682810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    ForceAnimationPlayback(49680800, 20012, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49680801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49680800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
